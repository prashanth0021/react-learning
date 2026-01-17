import type * as React from "react";
export interface ComboboxOption {
    id: string;
    label: string;
    disabled?: boolean;
}
export interface ComboboxGroupOption {
    id: string;
    label: string;
    options: ComboboxOption[];
}
export interface ComboboxProps {
    options: (ComboboxOption | ComboboxGroupOption)[];
    onChange: (value: string[]) => void;
    searchValue: string;
    onSearchChange: (value: string) => void;
    value?: string[];
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    label?: string;
    disabled?: boolean;
    multiple?: boolean;
    className?: string;
    error?: boolean;
    emptyStateText?: string;
    applyButtonText?: string;
    selectAllButtonText?: string;
    clearAllButtonText?: string;
    clearButtonText?: string;
    clearSearchAriaLabel?: string;
}
export interface HighlightedTextProps {
    text: string;
    highlight: string;
    className?: string;
}
export interface ComboboxGroupProps {
    group: ComboboxGroupOption;
    index: number;
    className?: string;
}
export interface ComboboxItemProps {
    option: ComboboxOption;
    isGrouped?: boolean;
    className?: string;
}
export interface ComboboxEmptyProps {
    message: string;
    subMessage?: string;
    className?: string;
}
export interface ComboboxSelectionIndicatorProps {
    isSelected: boolean;
    multiple?: boolean;
    isIndeterminate?: boolean;
    className?: string;
}
export interface ComboboxContentProps {
    children: React.ReactNode;
    className?: string;
    align?: "start" | "center" | "end";
    sideOffset?: number;
}
export interface ComboboxListProps {
    children?: React.ReactNode;
    className?: string;
}
export interface ComboboxOptionProps {
    option: ComboboxOption | ComboboxGroupOption;
    index: number;
}
export interface ComboboxTriggerProps {
    className?: string;
}
export interface ComboboxSearchProps {
    className?: string;
}
export interface ComboboxActionsProps {
    className?: string;
}
export interface ComboboxApplyProps {
    className?: string;
}
export interface ComboboxContextType {
    selectedValues: string[];
    handleSelect: (value: string) => void;
    handleGroupSelect: (options: ComboboxOption[]) => void;
    handleSelectAll: () => void;
    handleClear: () => void;
    multiple: boolean;
    disabled: boolean;
    hasValue: boolean;
    searchValue: string;
    onSearchChange: (value: string) => void;
    emptyMessage: string;
    displayValue: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    showActions: boolean;
    showApplyButton: boolean;
    isApplyDisabled: boolean;
    handleApply: () => void;
    options: (ComboboxOption | ComboboxGroupOption)[];
    emptyStateText: string;
    applyButtonText: string;
    selectAllButtonText: string;
    clearAllButtonText: string;
    clearButtonText: string;
    clearSearchAriaLabel: string;
    allSelected: boolean;
    someSelected: boolean;
    error?: boolean;
    searchPlaceholder?: string;
    value?: string[];
    className?: string;
}
