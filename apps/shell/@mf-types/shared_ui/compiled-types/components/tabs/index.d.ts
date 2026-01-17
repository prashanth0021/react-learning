import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { ComponentProps, ReactNode } from "react";
declare function Tabs({ className, ...props }: ComponentProps<typeof TabsPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>): import("react/jsx-runtime").JSX.Element;
declare function TabsTrigger({ className, ...props }: ComponentProps<typeof TabsPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
declare function TabsContent({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
export type TTabItem = {
    id: string;
    label: string;
    content: ReactNode;
};
export type TTabsComponentProps = ComponentProps<typeof TabsPrimitive.Root> & {
    tabs: TTabItem[];
};
declare const TabsComponent: ({ tabs, defaultValue, ...props }: TTabsComponentProps) => import("react/jsx-runtime").JSX.Element;
export { Tabs, TabsList, TabsTrigger, TabsContent };
export default TabsComponent;
