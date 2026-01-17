import * as SelectPrimitive from "@radix-ui/react-select";
import type * as React from "react";
import { type ComponentProps } from "react";
declare const Select: ({ ...props }: ComponentProps<typeof SelectPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const SelectValue: ({ ...props }: ComponentProps<typeof SelectPrimitive.Value>) => import("react/jsx-runtime").JSX.Element;
declare const SelectScrollUpButton: ({ className, ...props }: ComponentProps<typeof SelectPrimitive.ScrollUpButton>) => import("react/jsx-runtime").JSX.Element;
declare const SelectScrollDownButton: ({ className, ...props }: ComponentProps<typeof SelectPrimitive.ScrollDownButton>) => import("react/jsx-runtime").JSX.Element;
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
type SelectContentProps = ComponentProps<typeof SelectPrimitive.Content> & {
    portalContainer?: HTMLElement | null;
};
declare const SelectContent: ({ className, children, position, portalContainer, style, ...props }: SelectContentProps) => import("react/jsx-runtime").JSX.Element;
declare const SelectItem: ({ className, children, ...props }: ComponentProps<typeof SelectPrimitive.Item>) => import("react/jsx-runtime").JSX.Element;
type TSelectDropdownProps = ComponentProps<typeof SelectPrimitive.Root> & {
    onChange: (value: string) => void;
    items: {
        label: string;
        value: string;
    }[];
    placeholder: string;
    FormControl?: React.ElementType;
    triggerClassName?: string;
    contentClassName?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
};
type TSelectDropdown = {
    label: string;
    key: string;
};
declare const isSelectDropdown: (obj: unknown) => obj is TSelectDropdown;
declare const SelectDropdown: ({ value, items, onChange, placeholder, FormControl, triggerClassName, contentClassName, open, onOpenChange, disabled, ...props }: TSelectDropdownProps) => import("react/jsx-runtime").JSX.Element;
export { Select, SelectContent, SelectItem, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue, type TSelectDropdown, type TSelectDropdownProps, isSelectDropdown, };
export default SelectDropdown;
