<script>
    import { EXAMPLES } from "../../src/toast.constants";
    import shortid from "shortid";
    import { toast, ToastContainer } from "../../src";

    const indexMap = {
        success: 0,
        danger: 1,
        info: 2,
        warning: 3,
    };

    toast.config("top-right");

    const hanldleOnClick = (e) => {
        if (e.target.name === "success") {
            toast.success("This is a success message");
        }

        if (e.target.name === "danger") {
            toast.error("This is an error message");
        }

        if (e.target.name === "info") {
            toast.info("This is an info message");
        }

        if (e.target.name === "warning") {
            toast.warn("This is an warning message");
        }
    };
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
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
    <ToastContainer position="bottom-right" />
</main>
