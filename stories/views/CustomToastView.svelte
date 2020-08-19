<script lang="typescript">
    import { toast, ToastContainer } from "../../src";
    import SlotView from "../components/CustomToast.svelte";

    toast.configure({
        position: toast.POSITION.TOP_RIGHT,
    });

    const hanldleOnClick = (e) => {
        if (e.target.name === "success") {
            toast.default(SlotView, {
                autoClose: false,
            });
        }

        if (e.target.name === "danger") {
            toast.success("This is an error message", {
                icon: true,
            });
        }
    };
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
        font-family: Arial, Helvetica, sans-serif;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>

<main>
    <h1>Svelte Toastify</h1>
    <p>Click on the button to see the toast</p>
    <button name="success" on:click={hanldleOnClick}>
        Custom Toast Component
    </button>
    <button name="danger" on:click={hanldleOnClick}>Regular Toast</button>
    <ToastContainer />
</main>
