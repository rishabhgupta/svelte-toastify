<script lang="typescript">
    import { ToastPosition } from "../utils/types";
    import CloseButton from "./CloseButton.svelte";
    import { onMount, createEventDispatcher } from "svelte";
    import { POSITION } from "../utils/constants";
    /** id of the toast */
    export let id: number | string;
    /** title of the toast */
    export let title: string;
    /** type of the toast */
    export let type: string;
    /** callback function called on deletion of a toast */
    export let onClose: Function;
    /** number in milliseconds to show the toast for */
    export let autoClose: number | Boolean;
    /** render prop or false */
    export let closeButton: Function | Boolean;
    /** icon image or src link */
    export let icon: any;
    /** additional class to be applied */
    export let className: string;
    /** position of the toast container */
    export let position: POSITION;

    const getClassNames = (type: string) => {
        if (position === "top-right" || position === "bottom-right") {
            return `toast-item animate-right toast-item--${type}`;
        }
        return `toast-item animate-left toast-item--${type}`;
    };

    $: computedClassName = getClassNames(type);

    const dispatch = createEventDispatcher();
    let deleteTimeOut;

    onMount(() => {
        if (autoClose) {
            deleteTimeOut = setTimeout(() => {
                dispatch("delete", { id });
                if (onClose) {
                    onClose(id);
                }
            }, autoClose as number);
        }
    });

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

    /** Toast Specific classes **/
    .toast-item--success {
        background-color: #5cb85c;
        color: white;
    }

    .toast-item--error {
        background-color: #d9534f;
        color: white;
    }

    .toast-item--warning {
        background-color: #f0ad4e;
        color: white;
    }

    .toast-item--info {
        background-color: #5bc0de;
        color: white;
    }

    .toast-item--default {
        background-color: white;
        color: black;
    }
</style>

<div class={computedClassName}>
    {#if icon}
        <div class="toast-item__image"><img src={icon} alt="icon" /></div>
    {/if}
    <div class="toast-item__body">
        {#if title}
            <p class="toast-item__title">{title}</p>
        {/if}
        <slot />
    </div>
    {#if closeButton}
        <div class="toast-item__buttons">
            <CloseButton {id} on:delete {onClose} {closeButton} {type} />
        </div>
    {/if}
</div>
