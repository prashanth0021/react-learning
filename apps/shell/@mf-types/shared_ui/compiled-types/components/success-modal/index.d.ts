import type { ReactNode } from "react";
import { type TModalProps } from "@/components/modal";
export type TSuccessModalProps = Omit<TModalProps, "children"> & {
    message: string | ReactNode;
    heading?: string;
};
declare const SuccessModal: ({ heading, message, setOpen, primaryCta, }: TSuccessModalProps) => import("react/jsx-runtime").JSX.Element;
export default SuccessModal;
