import * as DialogPrimitive from "@radix-ui/react-dialog";
import type React from "react";
import { type ComponentProps, type ReactNode } from "react";
import { type ButtonProps } from "@/components/button";
export type TDialogProps = ComponentProps<typeof DialogPrimitive.Root>;
export type TDialogTriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>;
export type TDialogPortalProps = ComponentProps<typeof DialogPrimitive.Portal>;
export type TDialogCloseProps = ComponentProps<typeof DialogPrimitive.Close>;
export type TDialogOverlayProps = ComponentProps<typeof DialogPrimitive.Overlay>;
export type TDialogContentProps = ComponentProps<typeof DialogPrimitive.Content>;
export type TDialogHeaderProps = ComponentProps<"div">;
export type TDialogFooterProps = ComponentProps<"div">;
export type TDialogTitleProps = ComponentProps<typeof DialogPrimitive.Title>;
export type TDialogDescriptionProps = ComponentProps<typeof DialogPrimitive.Description>;
declare const Dialog: ({ ...props }: ComponentProps<typeof DialogPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const DialogTrigger: ({ ...props }: ComponentProps<typeof DialogPrimitive.Trigger>) => import("react/jsx-runtime").JSX.Element;
declare const DialogPortal: ({ ...props }: ComponentProps<typeof DialogPrimitive.Portal>) => import("react/jsx-runtime").JSX.Element;
declare const DialogClose: ({ className, ...props }: ComponentProps<typeof DialogPrimitive.Close>) => import("react/jsx-runtime").JSX.Element;
declare const DialogOverlay: ({ className, ...props }: ComponentProps<typeof DialogPrimitive.Overlay>) => import("react/jsx-runtime").JSX.Element;
declare const DialogContent: ({ className, children, ...props }: ComponentProps<typeof DialogPrimitive.Content>) => import("react/jsx-runtime").JSX.Element;
declare const DialogHeader: ({ className, ...props }: ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const DialogFooter: ({ className, ...props }: ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const DialogTitle: ({ className, ...props }: ComponentProps<typeof DialogPrimitive.Title>) => import("react/jsx-runtime").JSX.Element;
declare const DialogDescription: ({ className, ...props }: ComponentProps<typeof DialogPrimitive.Description>) => import("react/jsx-runtime").JSX.Element;
export type TFooterCTA = Omit<ButtonProps, "onClick" | "children"> & {
    label?: ReactNode;
    onClick?: () => Promise<void> | void;
    icon?: ReactNode;
    show?: boolean;
};
type Require<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type TModalProps = {
    heading: React.ReactNode | string;
    setOpen: (open: boolean) => void;
    children: ReactNode;
    primaryCta?: Require<TFooterCTA, "onClick"> & {
        shouldAutoClose?: boolean;
    };
    secondaryCta?: TFooterCTA;
    tertiaryCta?: Require<TFooterCTA, "onClick">;
    className?: {
        content?: string;
        header?: string;
        title?: string;
        body?: string;
        footer?: string;
        cta?: string;
        closeIcon?: string;
    };
    labels?: {
        confirm: string;
        cancel: string;
    };
    PrefixIcon?: React.ReactNode;
};
export declare const ModalFooterCta: ({ label, className, icon, show: _show, ...restProps }: TFooterCTA) => import("react/jsx-runtime").JSX.Element;
declare const Modal: ({ heading, setOpen, children, primaryCta, secondaryCta, tertiaryCta, className, labels, PrefixIcon, }: TModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, };
