import type React from "react";
export type TruncatedTextProps = {
    children: React.ReactNode;
    className?: {
        container?: string;
        tooltip?: string;
    };
    /** Debounce delay for resize events (default: 150ms) */
    debounceDelay?: number;
    /** Disable overflow detection entirely (default: false) */
    disabled?: boolean;
};
/**
 * A component that truncates text and shows full text in a tooltip on hover
 * when the text overflows its container.
 */
declare const TruncatedText: ({ children, className, debounceDelay, disabled, }: TruncatedTextProps) => import("react/jsx-runtime").JSX.Element;
export default TruncatedText;
