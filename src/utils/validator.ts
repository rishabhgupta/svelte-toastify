import { POSITION } from "./constants";

const position = ({ position }): void => {
    if (!Object.values(POSITION).includes(position)) {
        throw new Error(
            `Invalid toast position. Should be one of ${Object.values(
                POSITION
            )}`
        );
    }
};

const autoClose = ({ autoClose }) => {
    if (
        autoClose &&
        (autoClose < 2000 || autoClose > Number.MAX_SAFE_INTEGER)
    ) {
        throw new Error(
            `Invalid autoClose value. Should be between 2000ms and ${Number.MAX_SAFE_INTEGER}`
        );
    }
};

export default {
    position,
    autoClose,
};
