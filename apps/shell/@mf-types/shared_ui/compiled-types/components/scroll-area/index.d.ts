import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { type ComponentProps } from "react";
import { ScrollBarSize } from "./types";
export declare const ScrollBar: ({ className, orientation, size, ...props }: ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> & {
    size?: ScrollBarSize;
}) => import("react/jsx-runtime").JSX.Element;
declare const ScrollArea: ({ className, children, onBottomReached, scrollBarSize, ...props }: ComponentProps<typeof ScrollAreaPrimitive.Root> & {
    onBottomReached?: () => void;
    /**
     * Controls the thickness of the scroll bar.
     * Accepted values: 'sm' | 'md' | 'lg'.
     * 'sm' = thin, 'md' = medium, 'lg' = thick.
     */
    scrollBarSize?: ScrollBarSize;
}) => import("react/jsx-runtime").JSX.Element;
export default ScrollArea;
export { ScrollBarSize } from "./types";
