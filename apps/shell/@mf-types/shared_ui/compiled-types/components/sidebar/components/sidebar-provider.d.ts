import * as React from "react";
import type { SidebarContextProps } from "../types";
export declare const useSidebar: () => SidebarContextProps;
interface SidebarProviderProps extends React.ComponentProps<"div"> {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare const SidebarProvider: ({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: SidebarProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
