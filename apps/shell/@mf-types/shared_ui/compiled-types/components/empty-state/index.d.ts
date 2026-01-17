import type { ReactNode } from "react";
import { type ButtonProps } from "@/components/button";
export type TActionCTA = Omit<ButtonProps, "onClick" | "children"> & {
    label?: ReactNode;
    onClick?: () => Promise<void> | void;
    icon?: ReactNode;
};
export type TEmptyStateProps = {
    variant?: "default" | "compact";
    title?: ReactNode;
    subtitle?: ReactNode;
    primaryCTA?: TActionCTA;
    secondaryCTA?: TActionCTA;
    icon?: ReactNode;
};
declare const EmptyState: ({ title, subtitle, primaryCTA, secondaryCTA, variant, icon, }: TEmptyStateProps) => import("react/jsx-runtime").JSX.Element;
export default EmptyState;
