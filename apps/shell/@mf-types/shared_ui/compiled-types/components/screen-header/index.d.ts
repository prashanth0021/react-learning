import type React from "react";
import "tailwind-css";
export type ScreenHeaderProps = {
    title: string | React.ReactNode;
    secondaryTitle?: string;
    icon?: React.ReactNode;
    rightElement?: React.ReactNode;
    labels?: {
        back: string;
    };
    showBackButton?: boolean;
    onBackClick?: () => void;
};
declare const ScreenHeader: ({ title, secondaryTitle, icon, rightElement, showBackButton, labels, onBackClick, }: ScreenHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default ScreenHeader;
