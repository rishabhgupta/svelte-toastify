<script>
    import { toast, ToastContainer } from "../../src";

    toast.configure({
        position: toast.POSITION.TOP_RIGHT,
        preventDuplicate: true,
    });

    const hanldleOnClick = (e) => {
        toast.success(`This is a success message. ${e.target.id}`, {
            toastId: e.target.id,
        });
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
    <button name="success" id="1" on:click={hanldleOnClick}>
        Success ID 1
    </button>
    <button name="sucesss" id="1" on:click={hanldleOnClick}>
        Success ID 1
    </button>
    <button name="info" id="3" on:click={hanldleOnClick}>Success ID 3</button>
    <button name="warning" id="3" on:click={hanldleOnClick}>
        Success ID 3
    </button>
    <ToastContainer />
</main>
