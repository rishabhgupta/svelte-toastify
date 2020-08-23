import ToastView from './views/ToastView.svelte'
import AutoCloseView from './views/AutoCloseView.svelte';
import PreventDuplicateView from './views/PreventDuplicateView.svelte';
import CustomCloseButtonView from './views/CustomCloseButtonView.svelte';
import CustomToastView from './views/CustomToastView.svelte';
import StyleView from './views/StyleView.svelte';
import DeleteToastView from './views/DeleteToast.svelte';

export default {
    title: 'Usages',
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

export const PreventDuplicate = () => ({
    title: 'Prevent Duplicate',
    Component: PreventDuplicateView,
});

export const CustomCloseButton = () => ({
    title: 'Custom Close Button',
    Component: CustomCloseButtonView,
});

export const CustomToast = () => ({
    title: 'Custom Toast',
    Component: CustomToastView,

})

export const Style = () => ({
    title: 'Style Toast',
    Component: StyleView,
})

export const DeleteToast = () => ({
    title: 'Delete Toast',
    Component: DeleteToastView,
})