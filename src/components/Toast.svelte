<script lang="typescript">
    import toast from "../toast";
    import { toastStore } from "../store/toast.store";
    import ToastItem from "./ToastItem.svelte";
    import { ToastOptions } from "../utils/types";
    import { POSITION } from "../utils/constants";

    const getClassNames = (pos: POSITION): string => {
        let classname = `toast-container toast-container--${pos}`;
        if (toast.config.className) {
            classname = `${classname} ${toast.config.className}`;
        }
        return classname;
    };

    let toastStoreValue: ToastOptions[];

    const unsubscribe = toastStore.subscribe((value) => {
        toastStoreValue = value;
    });

    const onDelete = (e) => {
        const { id } = e.detail;
        toast.delete(id);
    };
</script>

<style>
    .toast-container {
        font-size: 14px;
        box-sizing: border-box;
        position: fixed;
        z-index: 999999;
        width: 300px;
    }
    .toast-container--top-right {
        top: 12px;
        right: 12px;
    }
    .toast-container--top-left {
        top: 12px;
        left: 12px;
    }
    .toast-container--bottom-right {
        bottom: 12px;
        right: 12px;
    }
    .toast-container--bottom-left {
        bottom: 12px;
        left: 12px;
    }
    .toast-item__message {
        margin: 0;
        text-align: left;
        width: 100%;
    }
</style>

<div class={getClassNames(toast.config.position)}>
    {#each toastStoreValue as toastr}
        <ToastItem
            id={toastr.toastId}
            title={toastr.title}
            type={toastr.type}
            icon={toastr.icon}
            on:delete={onDelete}
            position={toast.config.position}
            onClose={toastr.onClose}
            autoClose={toastr.autoClose}
            closeButton={toastr.closeButton}
            className={toastr.bodyClassName}>
            <slot>
                {#if typeof toastr.body === 'string'}
                    <p class="toast-item__message">{toastr.body}</p>
                {:else}
                    <svelte:component this={toastr.body} />
                {/if}
            </slot>
        </ToastItem>
    {/each}
</div>
