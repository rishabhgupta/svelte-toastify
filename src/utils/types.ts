import { POSITION } from "./constants";

export type Id = string | number;

/**
 * Supported Postions of the toast container
 */
export type ToastPosition =
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";

/**
 * Toast Configuration Options
 * Applied to all toasts
 */
export interface ConfigurationOptions {
    /**
     * Set the default position to use.
     * `One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
     * `Default: 'top-right'`
     */
    position?: POSITION;
    /**
     * Set the delay in ms to close the toast automatically.
     * Use `false` to prevent the toast from closing.
     * `Default: 5000`
     */
    autoClose?: number | false;
    /**
     * If true prevents duplicate toasts
     * uses toastid to check if the toast is currently being displayed by the same id.
     * Default: false
     */
    preventDuplicate?: boolean;
    /**
     * closeButton
     * if false hides the close button
     * if custom function renders the custom button
     */
    closeButton?: boolean | Function;
    /**
     * className
     * if provided will be applied to the toast container
     */
    className?: string | null;
    /**
     * bodyClassName
     * if provided is applied to the body of each toast
     */
    bodyClassName?: string | null;
}

export interface ToastOptions extends ConfigurationOptions {
    /**
     * Called when toast is unmounted.
     */
    onClose?: Function;
    /**
     * Set a custom `toastId`
     */
    toastId?: Id;
    /**
     * Title of the toast
     */
    title?: string;
    /**
     * kind of toast
     * @todo add toast types
     */
    type?: string;
    /**
     * Body of the toast
     */
    body?: string | Function;
    /**
     * Overide color of a toast
     */
    color?: string;
    /**
     * Image/Icon url or object
     */
    icon?: any;
}
