import type React from "react";
import type { ReactNode } from "react";
export type TConfirmDialogProps = {
    heading: string;
    message: string | ReactNode;
    setOpen: (open: boolean) => void;
    confirmLabel?: ReactNode;
    cancelLabel?: ReactNode;
    onConfirm: () => Promise<void> | void;
    showDraftButton?: boolean;
    draftLabel?: ReactNode;
    draftIcon?: ReactNode;
    onDraftClick?: () => Promise<void> | void;
    className?: {
        content?: string;
        header?: string;
        title?: string;
        body?: string;
        footer?: string;
        cta?: string;
    };
    PrefixIcon?: React.ReactNode;
};
declare const ConfirmDialog: ({ heading, message, setOpen, confirmLabel, cancelLabel, onConfirm, showDraftButton, draftLabel, draftIcon, onDraftClick, className, PrefixIcon, }: TConfirmDialogProps) => import("react/jsx-runtime").JSX.Element;
export default ConfirmDialog;
