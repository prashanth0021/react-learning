import { type VariantProps } from "class-variance-authority";
import type React from "react";
import "tailwind-css";
export declare const buttonVariants: (props?: ({
    size?: "default" | "link" | null | undefined;
    variant?: "link" | "none" | "primary" | "secondary" | "tertiary" | "link-tertiary" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    testId?: string;
    PrefixIcon?: React.ReactNode;
    SuffixIcon?: React.ReactNode;
};
declare const Button: ({ variant, size, className, testId, children, PrefixIcon, SuffixIcon, asChild: _asChild, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
