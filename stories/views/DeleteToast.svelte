<script>
    import { toast, ToastContainer } from "../../src";
    let toastId;

    const fire = (e) => {
        toastId = toast.success("This is success message", {
            autoClose: false,
        });
    };

    const deleteToast = () => {
        console.log(`deleting id ${toastId}`);
        toast.delete(toastId);
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
    :global(.toast-style) {
        font-weight: bold;
    }
    :global(.toast-body-style) {
        color: yellow;
    }
    :global(.toast-body-style-success) {
        color: blue;
    }
</style>

<main>
    <h1>Svelte Toastify</h1>
    <p>
        toast returns id for the generated toast. This id can be used to
        programatically delete the toast. If custom id is provided using toastId
        then that can be used.
    </p>
    <button name="success" on:click={fire}>Fire the toast</button>
    <button name="danger" on:click={deleteToast}>Delete the toast</button>
    <ToastContainer />
</main>
