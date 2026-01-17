import { type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { TooltipContent } from "@/components/tooltip";
export declare const SidebarMenu: ({ className, ...props }: React.ComponentProps<"ul">) => import("react/jsx-runtime").JSX.Element;
export declare const SidebarMenuItem: ({ className, ...props }: React.ComponentProps<"li">) => import("react/jsx-runtime").JSX.Element;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface SidebarMenuButtonProps extends React.ComponentProps<"button"> {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | (React.ComponentProps<typeof TooltipContent> & {
        disabled?: boolean;
    });
}
export declare const SidebarMenuButton: ({ asChild, isActive, variant, size, tooltip, className, ...props }: SidebarMenuButtonProps & VariantProps<typeof sidebarMenuButtonVariants>) => import("react/jsx-runtime").JSX.Element;
export declare const SidebarMenuSub: ({ className, ...props }: React.ComponentProps<"ul">) => import("react/jsx-runtime").JSX.Element;
export declare const SidebarMenuSubItem: ({ className, ...props }: React.ComponentProps<"li">) => import("react/jsx-runtime").JSX.Element;
interface SidebarMenuSubButtonProps extends React.ComponentProps<"a"> {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}
export declare const SidebarMenuSubButton: ({ asChild, size, isActive, className, ...props }: SidebarMenuSubButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
