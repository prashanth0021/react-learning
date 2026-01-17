import type * as React from "react";
interface SidebarBaseProps extends React.ComponentProps<"div"> {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
    labels?: {
        sidebar: string;
        displaysMobileSidebar: string;
    };
}
export declare const SidebarBase: ({ side, variant, collapsible, className, labels, children, ...props }: SidebarBaseProps) => import("react/jsx-runtime").JSX.Element;
export {};
