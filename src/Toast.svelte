<script>
    import toast from "./toast";

    /** position of the toasts on the sreen */
    export let position;

    import { toastStore } from "./toast.store";

    import ToastItem from "./ToastItem.svelte";

    let toastStoreValue;

    const getClassNames = (pos) => {
        return `toast-container toast-container--${pos}`;
    };

    const unsubscribe = toastStore.subscribe((value) => {
        toastStoreValue = value;
    });

    const onDelete = (e) => {
        const { id } = e.detail;
        toastStore.remove(id);
    };
</script>

<style>
    .toast-container {
        font-size: 14px;
        box-sizing: border-box;
        position: fixed;
        z-index: 999999;
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
</style>

<div class={getClassNames(toast.position)}>
    {#each toastStoreValue as toast}
        <ToastItem
            id={toast.id}
            title={toast.title}
            description={toast.description}
            backgroundColor={toast.color}
            icon={toast.icon}
            on:delete={onDelete}
            {position}
            onClose={toast.onClose} />
    {/each}
</div>
