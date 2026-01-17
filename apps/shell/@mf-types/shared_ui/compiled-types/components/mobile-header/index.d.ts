import type { ReactNode } from "react";
import "tailwind-css";
export type MobileHeaderProps = {
    title: string;
    icon?: ReactNode;
    labels?: {
        openNavMenu: string;
    };
    notificationCount: number;
    onMenuClick: () => void;
    rightElement?: ReactNode;
};
declare const MobileHeader: ({ title, icon, labels, notificationCount, onMenuClick, rightElement, }: MobileHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default MobileHeader;
