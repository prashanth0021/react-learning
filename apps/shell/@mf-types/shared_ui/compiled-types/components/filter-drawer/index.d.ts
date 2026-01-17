import "tailwind-css";
import type { TFilterComponentOwnProps, TFilterProps, TFilterValues } from "@/types/filters";
export type { TFilterComponentOwnProps };
export declare const FilterDrawer: <T extends TFilterValues>({ children, values, onChange, onApply, onClearAll, loading, setLocalState, localState, isOpen, setIsOpen, activeFilterCount, labels, }: TFilterProps<T>) => import("react/jsx-runtime").JSX.Element;
