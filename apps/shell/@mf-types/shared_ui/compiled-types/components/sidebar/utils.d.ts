import type { NavigationContext, NavigationItem, NavigationSection } from "@/components/sidebar/types";
export declare const SIDEBAR_CONSTANTS: {
    readonly WIDTH: "18rem";
    readonly WIDTH_MOBILE: "19.5rem";
    readonly WIDTH_ICON: "5.5rem";
};
export declare const SIDEBAR_CLASSES: {
    readonly transition: "transition-[left,right,width] duration-250 ease-linear";
    readonly activeItem: "bg-primary-50 text-primary-500 font-medium hover:bg-primary-50! hover:text-primary-500! active:bg-primary-50 active:text-primary-500";
    readonly baseButton: string;
};
export declare const createTooltipProps: ({ bgColor, className, ...props }: {
    bgColor?: string;
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
}) => {
    children: React.ReactNode;
    disabled?: boolean;
    className: string;
    bgColor: string;
    showArrow: boolean;
};
export declare const getNavigationSections: (sections: NavigationSection[]) => {
    mainSections: NavigationSection[];
    bottomSections: NavigationSection[];
};
export declare const isItemActive: (item: NavigationItem, currentNavItemKey?: string) => boolean;
export declare const isSubItemActive: (subItem: NavigationItem, currentSubNavItemKey?: string) => boolean;
export declare const resolveIcon: (item: NavigationItem, context: NavigationContext) => React.ReactNode;
export declare const handleItemClick: (item: NavigationItem, context: NavigationContext) => void;
