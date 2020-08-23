import { toastStore } from './store/toast.store';

import { generateToastId } from "./utils/helper";
import { ConfigurationOptions, ToastOptions, Id } from './utils/types';
import { POSITION, TYPE, DEFAULT_CONFIG } from './utils/constants';

/**
 * Singleton Class Toast
 */
class Toast {

    public config: ConfigurationOptions = DEFAULT_CONFIG;
    private idMap: { [key: string]: boolean };
    // store instance reference if already intantiated
    private static instance: Toast;

    readonly POSITION = POSITION;
    readonly TYPE = TYPE;

    private constructor() {
        this.idMap = {};
    }

    static getInstance() {
        if (Toast.instance) {
            return Toast.instance;
        }
        Toast.instance = new Toast();
        return Toast.instance;
    }

    private validateOptions(options: ToastOptions): boolean {
        // if prevent duplicate is true and toastid is present
        if (this.config.preventDuplicate && options.toastId) {
            // check if the given toastid exists in the map
            return this.idMap[options.toastId] === undefined;
        }
        return true;
    }

    private mergeOptions(type: string, options: ToastOptions): ToastOptions {
        options = {
            ...options,
            autoClose: options.autoClose !== undefined ? options.autoClose : this.config.autoClose,
            toastId: options.toastId ? options.toastId : generateToastId(),
            closeButton: options.closeButton !== undefined ? options.closeButton : this.config.closeButton,
            bodyClassName: options.bodyClassName !== undefined ? options.bodyClassName : this.config.bodyClassName,
        }

        if (options.icon === true) {
            options.icon = this.config[type].icon;
        }

        this.idMap[options.toastId] = true;
        return options;
    }

    configure(configObj: ConfigurationOptions) {
        this.config = {
            ...this.config,
            ...configObj,
        }
    }

    success(msg: string | Function, options?: ToastOptions): Id {

        if (options && !this.validateOptions(options)) {
            return;
        }

        options = this.mergeOptions(this.TYPE.SUCCESS, {
            ...options,
            body: msg,
            type: TYPE.SUCCESS,
        });
        toastStore.add(options);
        return options.toastId;
    }

    error(msg: string | Function, options?: ToastOptions): Id {
        if (options && !this.validateOptions(options)) {
            return;
        }

        options = this.mergeOptions(this.TYPE.ERROR, {
            ...options,
            body: msg,
            type: TYPE.ERROR,
        });

        toastStore.add(options);
        return options.toastId;
    }

    warning(msg: string | Function, options?: ToastOptions): Id {
        if (options && !this.validateOptions(options)) {
            return;
        }

        options = this.mergeOptions(this.TYPE.WARNING, {
            ...options,
            body: msg,
            type: TYPE.WARNING,
        });

        toastStore.add(options);
        return options.toastId;
    }

    info(msg: string | Function, options?: ToastOptions): Id {
        if (options && !this.validateOptions(options)) {
            return;
        }

        options = this.mergeOptions(this.TYPE.INFO, {
            ...options,
            body: msg,
            type: TYPE.INFO,
        });

        toastStore.add(options);
        return options.toastId;
    }

    default(msg: string | Function, options?: ToastOptions): Id {
        if (options && !this.validateOptions(options)) {
            return;
        }

        options = this.mergeOptions(this.TYPE.DEFAULT, {
            ...options,
            body: msg,
            type: TYPE.DEFAULT,
        });

        toastStore.add(options);
        return options.toastId;
    }

    delete(toastId: string) {
        // remove the toastid from map
        if (this.idMap[toastId]) {
            delete this.idMap[toastId];
            // delete toast from store
            toastStore.remove(toastId);
        }
    }
}

const toast = Toast.getInstance();
export default toast;