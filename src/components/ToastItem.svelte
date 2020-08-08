<script>
    /** id of the toast */
    export let id;
    /** title of the toast */
    export let title;
    /** hex code of the background color */
    export let backgroundColor;
    /** callback function called on deletion of a toast */
    export let onClose;
    /** number in milliseconds to show the toast for */
    export let autoClose;
    /** render prop or false */
    export let closeButton;
    /** icon image or src link */
    export let icon;
    /** additional class to be applied */
    export let className;
    /** position of the toast container */
    export let position;

    import image from "../assets/check.svg";
    import CloseButton from "./CloseButton.svelte";
    import { onDestroy, onMount, createEventDispatcher } from "svelte";
    import toast from "../toast";

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

    const getBodyClassNames = () => {
        let classname = "toast-item__body";
        if (className) {
            classname = `${classname} ${className}`;
        }
        return classname;
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
        padding: 15px 15px;
        margin-bottom: 15px;
        height: auto;
        max-height: 100px;
        border-radius: 5px 5px 5px 5px;
        box-shadow: 0 0 10px #999;
        color: #000;
        opacity: 0.9;
        background-position: 15px;
        background-repeat: no-repeat;
        color: #fff;
        display: flex;
        align-items: center;
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
        box-shadow: 0 0 12px #aaa;
        opacity: 1;
        cursor: pointer;
    }

    .toast-item__image {
        flex: 0 1 30px;
        margin-right: 10px;
    }

    .toast-item__image img {
        width: 30px;
        height: 30px;
    }

    .toast-item__body {
        flex: 4;
    }

    .toast-item__buttons {
        flex: 0 1 10px;
        align-self: baseline;
    }

    .toast-item__title {
        font-weight: 700;
        font-size: 16px;
        text-align: left;
        margin-top: 0;
        margin-bottom: 6px;
        height: 18px;
    }

    .toast-item__message {
        margin: 0;
        text-align: left;
        width: 100%;
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
    {#if icon}
        <div class="toast-item__image">
            <img src={icon} alt="icon" />
        </div>
    {/if}
    <div class={getBodyClassNames()}>
        {#if title}
            <p class="toast-item__title">{title}</p>
        {/if}
        <slot />
    </div>
    {#if closeButton}
        <div class="toast-item__buttons">
            <CloseButton {id} on:delete {onClose} {closeButton} />
        </div>
    {/if}

</div>
