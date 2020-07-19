import { toastStore } from './toast.store';
import shortid from 'shortid';

import successImage from "./assets/check.svg";
import errorImage from "./assets/error.svg";
import infoImage from "./assets/info.svg"
import warningImage from "./assets/warning.svg";

let instance = null;

class Toast {

    constructor() {
        this.config = {
            position: "botton-right",
            autoClose: false,
        }
        this.position = "botton-right";
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
            id: shortid.generate(),
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
            id: shortid.generate(),
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
            id: shortid.generate(),
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
            id: shortid.generate(),
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