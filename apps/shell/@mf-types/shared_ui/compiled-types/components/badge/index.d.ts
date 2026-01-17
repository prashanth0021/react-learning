import type { ComponentProps, ReactElement } from "react";
import "./index.css";
export type BadgeProps = {
    label: ReactElement | string;
    textColor?: string;
    backgroundColor?: string;
};
declare const Badge: ({ label, textColor, backgroundColor, className, ...props }: ComponentProps<"div"> & BadgeProps) => import("react/jsx-runtime").JSX.Element;
export type TNewBadgeProps = {
    labels?: {
        label: string;
    };
};
export declare const NewBadge: ({ labels, }: TNewBadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;
