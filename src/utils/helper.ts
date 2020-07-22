/**
 * Generate a random toastId
 */
export const generateToastId = (): string => {
    return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
}
