import { writable } from 'svelte/store';

/**
 * Store will
 * 1. Will maintain a list of all toasts
 * 2. A queue to store the toast which were fired before the container was mounted
 * 3. Method to add a new toast.
 * 4. Method to delete a toast.
 * 5. Method to update an existing toast.
 * 6. Method to clear all toast
 */

function Store() {
    const { subscribe, set, update } = writable([]);

    function add(toastObj) {
        update(list => {
            return [...list, toastObj];
        });
    }

    function remove(id) {
        update(list => {
            const index = list.findIndex((e) => e.toastId === id);
            list.splice(index, 1);
            return [...list];
        })
    }

    return {
        subscribe,
        add,
        remove,
    }
}

export const toastStore = Store();

