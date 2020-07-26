import { toastStore } from './store/toast.store';
import successImage from "./assets/check.svg";
import errorImage from "./assets/error.svg";
import infoImage from "./assets/info.svg"
import warningImage from "./assets/warning.svg";
import { generateToastId } from "./utils/helper";
import { ConfigurationOptions, ToastOptions } from './utils/types';
import { POSITION, TYPE } from './utils/constants';

let instance: Toast;

class Toast {

    private config: ConfigurationOptions;
    POSITION = POSITION;
    TYPE = TYPE;

    constructor() {
        this.config = {
            position: this.POSITION.BOTTOM_RIGHT,
            autoClose: 5000,
            [this.TYPE.SUCCESS]: {
                color: "#5cb85c",
                icon: successImage,
            },
            [this.TYPE.ERROR]: {
                color: "#d9534f",
                icon: errorImage,
            },
            [this.TYPE.WARNING]: {
                color: "#f0ad4e",
                icon: warningImage,
            },
            [this.TYPE.INFO]: {
                color: "#5bc0de",
                icon: infoImage,
            }
        }
    }

    private mergeOptions(type: string, options: ToastOptions): ToastOptions {
        options = {
            ...options,
            autoClose: options.autoClose !== undefined ? options.autoClose : this.config.autoClose,
            color: options.color ? options.color : this.config[type].color,
            toastId: generateToastId(),
        }

        if (options.icon === true) {
            options.icon = this.config[type].icon;
        }
        return options;
    }

    configure(configObj: ConfigurationOptions) {
        this.config = {
            ...this.config,
            ...configObj,
        }
    }

    success(msg: string, options: ToastOptions) {
        options = this.mergeOptions(this.TYPE.SUCCESS, {
            ...options,
            body: msg
        });
        toastStore.add(options);
    }

    error(msg: string, options: ToastOptions) {
        options = this.mergeOptions(this.TYPE.ERROR, {
            ...options,
            body: msg
        });

        toastStore.add(options);
    }

    warning(msg: string, options: ToastOptions) {
        options = this.mergeOptions(this.TYPE.WARNING, {
            ...options,
            body: msg
        });

        toastStore.add(options);
    }

    info(msg: string, options: ToastOptions) {
        options = this.mergeOptions(this.TYPE.INFO, {
            ...options,
            body: msg
        });

        toastStore.add(options);
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