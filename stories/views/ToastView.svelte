<script lang="typescript">
    import { toast, ToastContainer } from "../../src";
    import SlotView from "../components/CustomToast.svelte";

    toast.configure({
        position: toast.POSITION.TOP_RIGHT,
    });

    const hanldleOnClick = (e) => {
        if (e.target.name === "success") {
            toast.success("This is success message");
        }

        if (e.target.name === "danger") {
            toast.error("This is an error message", {
                icon: true,
            });
        }

        if (e.target.name === "info") {
            toast.info("This is an info message", { icon: true });
        }

        if (e.target.name === "warning") {
            toast.warning("This is an warning message", { icon: true });
        }

        if (e.target.name === "default") {
            toast.default("This is a default message.");
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
    <button name="success" on:click={hanldleOnClick}>Success</button>
    <button name="danger" on:click={hanldleOnClick}>Danger</button>
    <button name="info" on:click={hanldleOnClick}>Info</button>
    <button name="warning" on:click={hanldleOnClick}>Warning</button>
    <button name="default" on:click={hanldleOnClick}>Default</button>
    <ToastContainer />
</main>
