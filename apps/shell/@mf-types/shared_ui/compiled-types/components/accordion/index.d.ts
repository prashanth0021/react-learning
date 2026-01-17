import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type * as React from "react";
declare const Accordion: ({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const AccordionItem: ({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) => import("react/jsx-runtime").JSX.Element;
declare const AccordionTrigger: ({ className, children, chevronClassName, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
    chevronClassName?: string;
}) => import("react/jsx-runtime").JSX.Element;
declare const AccordionContent: ({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) => import("react/jsx-runtime").JSX.Element;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
