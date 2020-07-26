<script>
    import { toast, ToastContainer } from "../../src";

    let timeValue = 3000;

    toast.configure({ position: "top-right" });

    const handleTimeValueChange = (e) => {
        timeValue = e.target.value;
    };

    const hanldleOnClick = (e) => {
        if (e.target.name === "success") {
            toast.success("This is a success message", {
                autoClose: timeValue,
            });
        }

        if (e.target.name === "danger") {
            toast.error("This is an error message", { autoClose: timeValue });
        }

        if (e.target.name === "info") {
            toast.info("This is an info message", { autoClose: timeValue });
        }

        if (e.target.name === "warning") {
            toast.warning("This is an warning message", {
                autoClose: timeValue,
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
    <p>Enter the duration after which the toast should disappear in ms.</p>
    <input label="time" value={timeValue} on:change={handleTimeValueChange} />
    <button name="success" on:click={hanldleOnClick}>Success</button>
    <button name="danger" on:click={hanldleOnClick}>Danger</button>
    <button name="info" on:click={hanldleOnClick}>Info</button>
    <button name="warning" on:click={hanldleOnClick}>Warning</button>
    <ToastContainer />
</main>
