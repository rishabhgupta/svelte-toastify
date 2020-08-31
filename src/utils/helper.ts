import { ConfigurationOptions } from "./types";
import validator from "./validator";

/**
 * Generate a random toastId
 */
export const generateToastId = (): string => {
    return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
};

export const validateConfig = (
    config: ConfigurationOptions
): { valid: boolean; msg?: string } => {
    try {
        for (const option in config) {
            if (validator[option]) {
                validator[option](config);
            }
        }
        return {
            valid: true,
        };
    } catch (err) {
        return {
            valid: false,
            msg: err,
        };
    }
};
