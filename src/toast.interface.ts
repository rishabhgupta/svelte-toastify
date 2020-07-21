export interface IToast {
    id: string;
    title: string;
    description: string;
    backgroundColor: string;
    icon: string;
    onClose: Function;
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    autoClose: number | null;
    color: string;
}
