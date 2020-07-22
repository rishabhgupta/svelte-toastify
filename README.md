# Svelte Toastify
> Under development *DO NOT USE*

## Toast Library for svelte

### Setup

#### Import toast and ToastContainer component 
```js
import { toast, ToastContainer } from "svelte-toastify";
```

#### Configure 
```js
toast.configure({
    position: "top-right"
});
```

#### Add toast container in App.svelte
```html
<main>
    <div>Your App </div>
    <ToastContainer />
</main>
```

### Usage

Import toast in you component
```js
import { toast } from "svelte-toastify";
```

To Fire a toast
```js

toast.success("This is a success message");
    
toast.error("This is an error message");

toast.info("This is an info message");

toast.warn("This is an warning message");
```