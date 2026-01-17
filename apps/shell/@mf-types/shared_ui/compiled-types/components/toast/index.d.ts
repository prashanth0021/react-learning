import { type ToasterProps } from "sonner";
type Variant = "success" | "error" | "info";
export declare const toast: (variant: Variant, message: string, duration?: number) => string | number;
declare const Toaster: (props: ToasterProps) => import("react/jsx-runtime").JSX.Element;
export { Toaster };
