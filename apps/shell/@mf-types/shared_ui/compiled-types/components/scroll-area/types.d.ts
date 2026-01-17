/**
 * Scroll area related types and constants
 */
/**
 * Scroll bar size options
 */
export declare const ScrollBarSize: {
    readonly SMALL: "sm";
    readonly MEDIUM: "md";
    readonly LARGE: "lg";
};
export type ScrollBarSize = (typeof ScrollBarSize)[keyof typeof ScrollBarSize];
