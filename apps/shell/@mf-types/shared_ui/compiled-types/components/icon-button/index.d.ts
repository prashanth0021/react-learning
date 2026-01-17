import { type VariantProps } from "class-variance-authority";
import type React from "react";
export declare const iconButtonVariants: (props?: ({
    size?: "default" | null | undefined;
    variant?: "primary" | "secondary" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type IconButtonProps = React.ComponentProps<"button"> & VariantProps<typeof iconButtonVariants> & {
    testId?: string;
    children?: React.ReactNode;
};
declare const IconButton: ({ variant, size, className, testId, children, disabled, ...props }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
export default IconButton;
