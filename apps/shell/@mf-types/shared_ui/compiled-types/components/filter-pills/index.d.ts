import type React from "react";
type FilterPillProps = {
    onRemoveFilter: () => void;
    label: React.ReactNode;
    name?: string;
    className?: string;
    labels?: {
        removeFilter: string;
    };
};
declare const FilterPill: ({ onRemoveFilter, label, name, className, labels, }: FilterPillProps) => import("react/jsx-runtime").JSX.Element;
export default FilterPill;
