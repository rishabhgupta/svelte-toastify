export type Id = number | string;

/**
 * Supported Postions of the toast container
 */
export type ToastPosition =
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left';

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
    position?: ToastPosition;
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
     * @todo Add slot support
     */
    title?: string;
    /**
     * Body of the toast
     * @todo Add slot support
     */
    body: string;
    /**
     * Overide color of a toast
     */
    color?: string;
    /**
     * Image/Icon url or object
     */
    icon?: any;
}
