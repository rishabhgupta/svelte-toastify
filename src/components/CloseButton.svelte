<script lang="typescript">
    /** id of the toast */
    export let id: number | string;
    /** callback function if passed will be called when toast is closed */
    export let onClose: Function = () => {};
    /** render prop orm flase if passed will be rendered instead of X icon */
    export let closeButton: Function | Boolean = true;
    /** type of toast in case of default toast dark cross button is shown */
    export let type: string;

    import { createEventDispatcher } from "svelte";
    import { TYPE } from "../utils/constants";

    const dispatch = createEventDispatcher();

    const getClassName = (type: string): string => {
        if (type === TYPE.DEFAULT) {
            return "close-button close-button--default";
        }
        return "close-button";
    };

    $: className = getClassName(type);
    /*
     * on close button handler
     * dispatch delete event with id to delete the toast
     * if onClose callback is passed call that with toast id
     */
    const onClickHandler = (): void => {
        dispatch("delete", { id });
        if (onClose) {
            onClose(id);
        }
    };
</script>

<style>
    .close-button {
        position: relative;
        float: right;
        font-weight: 700;
        color: #fff;
        outline: none;
        border: none;
        text-shadow: 0 1px 0 #fff;
        opacity: 0.8;
        line-height: 1;
        font-size: 16px;
        padding: 0;
        cursor: pointer;
        background: 0 0;
        border: 0;
    }

    .close-button--default {
        color: #000;
        opacity: 0.3;
    }
    svg {
        fill: currentColor;
        height: 16px;
        width: 14px;
    }
</style>

<button
    type="button"
    class={className}
    aria-label="close"
    on:click={onClickHandler}>
    {#if typeof closeButton === 'function'}
        <svelte:component this={closeButton} />
    {:else}
        <svg aria-hidden="true" viewBox="0 0 14 16">
            <path
                d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1
                11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75
                3.75z" />
        </svg>
    {/if}
</button>
