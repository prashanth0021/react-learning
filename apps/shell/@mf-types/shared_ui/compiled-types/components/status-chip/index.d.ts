import type { ReactNode } from "react";
export declare enum ChipVariant {
    DEFAULT = "default",
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning"
}
export declare const StatusChip: ({ text, status, icon, className, }: {
    text: string;
    icon?: ReactNode;
    status?: ChipVariant;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export default StatusChip;
