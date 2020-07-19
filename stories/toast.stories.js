import ToastView from './views/ToastView.svelte'
import AutoCloseView from './views/AutoCloseView.svelte';

export default {
    title: 'Toast',
    component: ToastView,
};

export const Basic = () => ({
    title: 'Basic Usage',
    Component: ToastView,
});

export const AutoClose = () => ({
    title: 'Auto Close',
    Component: AutoCloseView,
});