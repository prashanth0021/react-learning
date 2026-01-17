import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import type * as React from "react";
export type TRadioItem = {
    id: string;
    value: string;
    label: React.ReactNode;
    subHeading?: React.ReactNode;
    disabled?: boolean;
};
export type RadioGroupClassNames = {
    item?: string;
    itemChecked?: string;
    itemDisabled?: string;
    itemContent?: string;
    label?: string;
    subHeading?: string;
    radioItem?: string;
    indicator?: string;
};
export type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root> & {
    items?: TRadioItem[];
    classNames?: RadioGroupClassNames;
};
declare const RadioGroup: ({ className, items, classNames, ...props }: RadioGroupProps) => import("react/jsx-runtime").JSX.Element;
declare const RadioGroupItem: ({ className, disabled, indicatorClassName, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
    indicatorClassName?: string;
}) => import("react/jsx-runtime").JSX.Element;
export { RadioGroup, RadioGroupItem };
