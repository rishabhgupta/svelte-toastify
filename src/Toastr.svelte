<script lang="typescript">
    import toast from "./toast";
    import { toastStore } from "./toast.store";
    import ToastItem from "./ToastItem.svelte";

    const getClassNames = (pos: string) => {
        return `toast-container toast-container--${pos}`;
    };

    let toastStoreValue;

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

<div class={getClassNames(toast.config.position)}>
    {#each toastStoreValue as toastr}
        <ToastItem
            id={toastr.id}
            title={toastr.title}
            description={toastr.description}
            backgroundColor={toastr.color}
            icon={toastr.icon}
            on:delete={onDelete}
            position={toast.config.position}
            onClose={toastr.onClose}
            autoClose={toastr.autoClose} />
    {/each}
</div>
