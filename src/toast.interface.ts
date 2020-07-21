interface IToast {
    id: string;
    title: string;
    description: string;
    backgroundColor: string;
    icon: string;
    on: Function;
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    autoClose: number | null;
}

export { IToast }; 