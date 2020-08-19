import { toastStore } from './store/toast.store';

import { generateToastId } from "./utils/helper";
import { ConfigurationOptions, ToastOptions } from './utils/types';
import { POSITION, TYPE, DEFAULT_CONFIG } from './utils/constants';

let instance: Toast;

class Toast {

    public config: ConfigurationOptions = DEFAULT_CONFIG;
    private idMap: { [key: string]: boolean };

    POSITION = POSITION;
    TYPE = TYPE;

    constructor() {
        this.idMap = {};
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

    success(msg: string | Function, options?: ToastOptions) {

        if (options && !this.validateOptions(options)) {
            return;
        }

        options = this.mergeOptions(this.TYPE.SUCCESS, {
            ...options,
            body: msg,
            type: TYPE.SUCCESS,
        });
        toastStore.add(options);
    }

    error(msg: string | Function, options?: ToastOptions) {
        if (options && !this.validateOptions(options)) {
            return;
        }

        options = this.mergeOptions(this.TYPE.ERROR, {
            ...options,
            body: msg,
            type: TYPE.ERROR,
        });

        toastStore.add(options);
    }

    warning(msg: string | Function, options?: ToastOptions) {
        if (options && !this.validateOptions(options)) {
            return;
        }

        options = this.mergeOptions(this.TYPE.WARNING, {
            ...options,
            body: msg,
            type: TYPE.WARNING,
        });

        toastStore.add(options);
    }

    info(msg: string | Function, options?: ToastOptions) {
        if (options && !this.validateOptions(options)) {
            return;
        }

        options = this.mergeOptions(this.TYPE.INFO, {
            ...options,
            body: msg,
            type: TYPE.INFO,
        });

        toastStore.add(options);
    }

    default(msg: string | Function, options?: ToastOptions) {
        if (options && !this.validateOptions(options)) {
            return;
        }

        options = this.mergeOptions(this.TYPE.DEFAULT, {
            ...options,
            body: msg,
            type: TYPE.DEFAULT,
        });

        toastStore.add(options);
    }

    delete(toastId: string) {
        // remove the toastid from map
        delete this.idMap[toastId];
        // delete toast from store
        toastStore.remove(toastId);
    }
}

const Singleton = () => {
    if (instance) {
        return instance;
    }

    instance = new Toast();
    return instance;
}

const toast = Singleton();
export default toast;