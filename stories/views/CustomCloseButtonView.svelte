<script lang="typescript">
    import { toast, ToastContainer } from "../../src";
    import CloseButton from "../components/CustomButton.svelte";

    toast.configure({
        position: toast.POSITION.TOP_RIGHT,
    });

    const hanldleOnClick = (e) => {
        if (e.target.name === "success") {
            toast.success("This is sucess message", {
                autoClose: false,
                closeButton: CloseButton,
            });
        }

        if (e.target.name === "danger") {
            toast.error("This is an error message", {
                icon: true,
                closeButton: false,
            });
        }

        if (e.target.name === "info") {
            toast.info("This is an info message", { icon: true });
        }

        if (e.target.name === "warning") {
            toast.warning("This is an warning message", { icon: true });
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
        Custom Close Button
    </button>
    <button name="danger" on:click={hanldleOnClick}>No Close Button</button>
    <button name="warning" on:click={hanldleOnClick}>
        Regular Close Button
    </button>
    <ToastContainer />
</main>
