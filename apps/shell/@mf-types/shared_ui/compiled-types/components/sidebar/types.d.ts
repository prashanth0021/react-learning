import type React from "react";
type NavigationIcon = React.ReactNode | ((context: NavigationContext) => React.ReactNode);
export interface NavigationItem {
    key: string;
    label: React.ReactNode;
    icon?: NavigationIcon;
    route?: string;
    children?: NavigationItem[];
    onClick?: (item: NavigationItem, context: NavigationContext) => void;
    tooltip?: string;
    disabled?: boolean;
    orientation?: "all" | "portrait" | "landscape";
}
export interface NavigationSection {
    id: string;
    items: NavigationItem[];
    position: "main" | "bottom";
    showSeparator?: boolean;
    className?: string;
}
export interface CollapsibleSidebarMenuProps {
    sections: NavigationSection[];
    headerText: string;
    collapsedHeaderText?: string;
    currentNavItemKey?: string;
    currentSubNavItemKey?: string;
    onNavigate?: (route: string, item: NavigationItem) => void;
    collapseText?: string;
    expandText?: string;
}
export interface NavigationContext {
    currentNavItemKey?: string;
    currentSubNavItemKey?: string;
    isCollapsed: boolean;
    isPortrait: boolean;
    onNavigate?: (route: string, item: NavigationItem) => void;
}
export interface SidebarContextProps {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    toggleSidebar: () => void;
}
export {};
