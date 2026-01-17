import "tailwind-css";
export type ActiveFiltersProps<T extends Record<string, unknown>> = {
    filters: T;
    setLocalState: (updater: (prev: T) => T) => void;
    className?: string;
};
export declare const ActiveFilters: <T extends Record<string, unknown>>({ filters, setLocalState, className, }: ActiveFiltersProps<T>) => import("react/jsx-runtime").JSX.Element | null;
