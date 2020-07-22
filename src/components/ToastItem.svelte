<script>
    export let id;
    export let title;
    export let description;
    export let backgroundColor;
    export let onClose;
    export let autoClose;
    export let icon;

    export let position;
    import image from "../assets/check.svg";
    import CloseButton from "./CloseButton.svelte";
    import { onDestroy, onMount, createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    let deleteTimeOut;

    onMount(() => {
        if (autoClose) {
            deleteTimeOut = setTimeout(() => {
                dispatch("delete", { id });
                if (onClose) {
                    onClose(id);
                }
            }, autoClose);
        }
    });

    const getClassNames = () => {
        if (position === "top-right" || position === "bottom-right") {
            return "toast-item animate-right";
        }
        return "toast-item animate-left";
    };
</script>

<style>
    .toast-item {
        background: green;
        transition: 0.3s ease;
        position: relative;
        pointer-events: auto;
        overflow: hidden;
        margin: 0 0 6px;
        padding: 18px 20px;
        margin-bottom: 15px;
        width: 300px;
        height: 40px;
        max-height: 100px;
        border-radius: 10px 10px 10px 10px;
        box-shadow: 0 0 10px #999;
        color: #000;
        opacity: 0.9;
        background-position: 15px;
        background-repeat: no-repeat;
        color: #fff;
    }

    .animate-right {
        transition: transform 0.6s ease-in-out;
        animation: toast-in-right 0.7s;
    }

    .animate-left {
        transition: transform 0.6s ease-in-out;
        animation: toast-in-left 0.7s;
    }
    .toast-item:hover {
        box-shadow: 0 0 12px #fff;
        opacity: 1;
        cursor: pointer;
    }

    .toast-item__image {
        float: left;
        margin-right: 15px;
    }

    .toast-item__image img {
        width: 30px;
        height: 30px;
    }

    .toast-item__title {
        font-weight: 700;
        font-size: 16px;
        text-align: left;
        margin-top: 0;
        margin-bottom: 6px;
        width: 300px;
        height: 18px;
    }

    .toast-item__message {
        margin: 0;
        text-align: left;
        height: 18px;
        margin-left: -1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    @keyframes toast-in-right {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes toast-in-left {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
</style>

<div class={getClassNames()} style="background-color: {backgroundColor}">
    <CloseButton {id} on:delete {onClose} />
    <div class="toast-item__image">
        <img src={icon} alt="icon" />
    </div>
    <div>
        <p class="toast-item__title">{title}</p>
        <p class="toast-item__message">{description}</p>
    </div>
</div>
