import type { NavigationContext, NavigationItem } from "../types";
interface NavigationItemRendererProps {
    items: NavigationItem[];
    context: NavigationContext;
    accordionValue: string;
    onAccordionValueChange: (value: string) => void;
    openSubMenuDropdown: string | null;
    onOpenSubMenuDropdownChange: (value: string | null) => void;
}
export declare const NavigationItemRenderer: ({ items, context, accordionValue, onAccordionValueChange, openSubMenuDropdown, onOpenSubMenuDropdownChange, }: NavigationItemRendererProps) => import("react/jsx-runtime").JSX.Element;
export {};
