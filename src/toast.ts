import { toastStore } from './store/toast.store';
import successImage from "./assets/check.svg";
import errorImage from "./assets/error.svg";
import infoImage from "./assets/info.svg"
import warningImage from "./assets/warning.svg";
import { generateToastId } from "./utils/helper";
import { ConfigurationOptions, ToastOptions } from './utils/types';

let instance: Toast;

class Toast {

    private config: ConfigurationOptions;

    constructor() {
        this.config = {
            position: "bottom-right",
            autoClose: null,
        }
    }

    configure(configObj: ConfigurationOptions) {
        this.config = {
            ...this.config,
            ...configObj,
        }
    }

    success(msg: string, options: ToastOptions) {
        options = {
            ...options,
            toastId: generateToastId(),
            title: "Success",
            body: msg,
            color: "#5cb85c",
            icon: successImage,
            onClose: (id) => console.log('Closed', id)
        }

        toastStore.add(options);
    }

    error(msg: string, options: ToastOptions) {
        options = {
            ...options,
            toastId: generateToastId(),
            title: "Danger",
            body: msg,
            icon: errorImage,
            color: "#d9534f",
        }

        toastStore.add(options);
    }

    warn(msg: string, options: ToastOptions) {
        options = {
            ...options,
            toastId: generateToastId(),
            title: "Warning",
            body: msg,
            icon: warningImage,
            color: "#f0ad4e",
        }

        toastStore.add(options);
    }

    info(msg: string, options: ToastOptions) {
        options = {
            ...options,
            toastId: generateToastId(),
            title: "Info",
            body: msg,
            icon: infoImage,
            color: "#5bc0de",
        }

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