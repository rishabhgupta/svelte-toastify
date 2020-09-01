import { toast, ToastContainer } from '../src';
import { POSITION } from '../src/utils/constants';

describe('Toast Class: Configuration', () => {
    it("should have currect default options", () => {
        expect(toast.config).toMatchObject({
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 5000,
            preventDuplicate: false,
            closeButton: true,
            className: null,
            bodyClassName: null
        })
    })

    it("should contain an empty idmap object", () => {
        expect(toast.idMap).toBeDefined();
        expect(toast.idMap).toMatchObject({});
    })

    it("should expose positions and types as static properties", () => {
        expect(toast.POSITION).toStrictEqual({
            TOP_LEFT: 'top-left',
            TOP_RIGHT: 'top-right',
            TOP_CENTER: 'top-center',
            BOTTOM_LEFT: 'bottom-left',
            BOTTOM_RIGHT: 'bottom-right',
            BOTTOM_CENTER: 'bottom-center'
        });
        expect(toast.TYPE).toStrictEqual({
            INFO: 'info',
            SUCCESS: 'success',
            WARNING: 'warning',
            ERROR: 'error',
            DEFAULT: 'default',
        });
    })

    it("should merge config options passed with default options", () => {
        toast.configure({
            position: POSITION.TOP_RIGHT,
            autoClose: 7000,
            preventDuplicate: true
        })

        expect(toast.config).toMatchObject({
            position: POSITION.TOP_RIGHT,
            autoClose: 7000,
            preventDuplicate: true,
            closeButton: true,
        })
    })

    it("shoud throw exception when invalid value is passed for an an option", () => {
        // toast position
        expect(() => {
            toast.configure({
                position: 'Invalid position'
            });
        }).toThrow(/Invalid toast position/);
        // autoclose
        expect(() => {
            toast.configure({
                autoClose: -1000
            })
        }).toThrow(/Invalid autoClose value/);

    })

})

