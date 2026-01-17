import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";
export interface FloatingMenuItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}
export interface FloatingMenuProps {
    trigger: React.ReactNode;
    items: FloatingMenuItem[];
    triggerMode?: "hover" | "click";
    className?: string;
    contentClassName?: string;
    onItemSelect?: (item: FloatingMenuItem) => void;
    disabled?: boolean;
    contentProps?: React.ComponentProps<typeof FloatingMenuContent>;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    closeOnScroll?: boolean;
    scrollableContainer?: React.RefObject<HTMLElement>;
    triggerProps?: React.ComponentProps<typeof FloatingMenuTrigger>;
}
declare const FloatingMenuRoot: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const FloatingMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const FloatingMenuContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const FloatingMenuItemComponent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    icon?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
declare function FloatingMenu({ trigger, items, className, contentClassName, onItemSelect, triggerProps, contentProps, disabled, triggerMode, closeOnScroll, scrollableContainer, }: FloatingMenuProps): import("react/jsx-runtime").JSX.Element;
export default FloatingMenu;
export { FloatingMenu, FloatingMenuRoot, FloatingMenuTrigger, FloatingMenuContent, FloatingMenuItemComponent, };
