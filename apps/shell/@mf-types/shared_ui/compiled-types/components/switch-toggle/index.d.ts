import * as SwitchPrimitive from "@radix-ui/react-switch";
import type * as React from "react";
type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;
declare const Switch: {
    ({ className, disabled, ...props }: SwitchProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Switch;
