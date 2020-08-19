import successImage from "../assets/check.svg";
import errorImage from "../assets/error.svg";
import infoImage from "../assets/info.svg"
import warningImage from "../assets/warning.svg";


/**
 * Toast Positions
 */
export const POSITION = {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center'
} as const;

/**
 * Toast Types
 */
export const TYPE = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    DEFAULT: 'default',
};

/**
 * Default Configuration Object
 * @todo add icon for defaul configuration
 */
export const DEFAULT_CONFIG = {
    position: POSITION.BOTTOM_RIGHT,
    autoClose: 5000,
    preventDuplicate: false,
    closeButton: true,
    className: null,
    bodyClassName: null,
    [TYPE.SUCCESS]: {
        icon: successImage,
    },
    [TYPE.ERROR]: {
        icon: errorImage,
    },
    [TYPE.WARNING]: {
        icon: warningImage,
    },
    [TYPE.INFO]: {
        icon: infoImage,
    }
}
