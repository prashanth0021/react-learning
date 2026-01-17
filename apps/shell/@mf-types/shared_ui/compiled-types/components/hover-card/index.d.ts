import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
declare function HoverCard({ ...props }: React.ComponentProps<typeof HoverCardPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function HoverCardTrigger({ ...props }: React.ComponentProps<typeof HoverCardPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
declare function HoverCardContent({ className, align, sideOffset, ...props }: React.ComponentProps<typeof HoverCardPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
type SimpleHoverCardProps = {
    trigger: React.ReactNode;
    content: React.ReactNode;
    align?: React.ComponentProps<typeof HoverCardContent>["align"];
    triggerId?: string;
    triggerClassName?: string;
    contentClassName?: string;
} & React.ComponentProps<typeof HoverCard>;
declare function SimpleHoverCard({ trigger, content, align, triggerId, triggerClassName, contentClassName, ...props }: SimpleHoverCardProps): import("react/jsx-runtime").JSX.Element;
export { SimpleHoverCard, HoverCard, HoverCardTrigger, HoverCardContent };
