<script>
    export let id;
    export let onClose;

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const onClickHandler = () => {
        dispatch("delete", { id });
        if (onClose) {
            onClose(id);
        }
    };
</script>

<style>
    button {
        position: relative;
        right: -0.3em;
        top: -0.3em;
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
</style>

<button type="button" aria-label="close" on:click={onClickHandler}>X</button>
