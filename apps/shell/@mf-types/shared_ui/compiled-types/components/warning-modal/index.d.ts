import type { ReactNode } from "react";
import { type TModalProps } from "@/components/modal";
export type TWarningModalProps = Omit<TModalProps, "children"> & {
    message: string | ReactNode;
    description?: string;
    isDanger?: boolean;
};
declare const WarningModal: ({ heading, message, setOpen, description, primaryCta, secondaryCta, isDanger, }: TWarningModalProps) => import("react/jsx-runtime").JSX.Element;
export default WarningModal;
