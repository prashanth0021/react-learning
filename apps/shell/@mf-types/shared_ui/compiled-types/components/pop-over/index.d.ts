import * as PopoverPrimitive from "@radix-ui/react-popover";
declare function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: React.ComponentProps<typeof PopoverPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
declare function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>): import("react/jsx-runtime").JSX.Element;
type SimplePopoverProps = {
    trigger: React.ReactNode;
    content: React.ReactNode;
    anchor?: React.ReactNode;
    align?: React.ComponentProps<typeof PopoverContent>["align"];
    triggerId?: string;
    triggerClassName?: string;
    contentClassName?: string;
} & React.ComponentProps<typeof Popover>;
declare function SimplePopover({ trigger, content, anchor, align, triggerId, triggerClassName, contentClassName, ...props }: SimplePopoverProps): import("react/jsx-runtime").JSX.Element;
export { SimplePopover, Popover, PopoverTrigger, PopoverContent, PopoverAnchor, };
