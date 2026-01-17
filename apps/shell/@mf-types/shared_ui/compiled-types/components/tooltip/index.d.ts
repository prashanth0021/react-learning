import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type * as React from "react";
import "tailwind-css";
declare const TooltipProvider: ({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>) => import("react/jsx-runtime").JSX.Element;
declare const Tooltip: ({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const TooltipTrigger: ({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) => import("react/jsx-runtime").JSX.Element;
declare const TooltipContent: ({ className, children, sideOffset, bgColor, style, showArrow, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content> & {
    bgColor?: string;
    showArrow?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
