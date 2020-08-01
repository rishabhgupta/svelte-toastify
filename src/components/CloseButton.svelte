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

    svg {
        fill: currentColor;
        height: 16px;
        width: 14px;
    }
</style>

<button type="button" aria-label="close" on:click={onClickHandler}>
    <svg aria-hidden="true" viewBox="0 0 14 16">
        <path
            fillRule="evenodd"
            d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1
            11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" />
    </svg>
</button>
