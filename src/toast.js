import { toastStore } from './toast.store';
import successImage from "./assets/check.svg";
import errorImage from "./assets/error.svg";
import infoImage from "./assets/info.svg"
import warningImage from "./assets/warning.svg";


let instance;

/**
 * Generate a random toastId
 */
function generateToastId() {
    return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
}

class Toast {

    constructor() {
        this.config = {
            position: "bottom-right",
            autoClose: null,
        }
    }

    configure(configObj) {
        this.config = {
            ...this.config,
            ...configObj,
        }
    }

    success(msg, options) {
        options = {
            ...options,
            id: generateToastId(),
            title: "Success",
            description: msg,
            color: "#5cb85c",
            icon: successImage,
            onClose: (id) => console.log('Closed', id)
        }

        toastStore.add(options);
    }

    error(msg, options) {
        options = {
            ...options,
            id: generateToastId(),
            title: "Danger",
            description: msg,
            icon: errorImage,
            color: "#d9534f",
        }

        toastStore.add(options);
    }

    warn(msg, options) {
        options = {
            ...options,
            id: generateToastId(),
            title: "Warning",
            description: msg,
            icon: warningImage,
            color: "#f0ad4e",
        }

        toastStore.add(options);
    }

    info(msg, options) {
        options = {
            ...options,
            id: generateToastId(),
            title: "Info",
            description: msg,
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