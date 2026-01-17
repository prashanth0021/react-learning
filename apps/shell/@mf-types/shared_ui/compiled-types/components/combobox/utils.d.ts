import type { ComboboxGroupOption, ComboboxOption } from "./types";
export declare const filterOptions: (value: string, search: string) => 0 | 1;
export declare const flattenOptions: (options: (ComboboxOption | ComboboxGroupOption)[]) => ComboboxOption[];
export declare const getDisplayValue: (value: string[] | undefined, multiple: boolean, allOptions: ComboboxOption[], placeholder: string) => string;
export declare const getNextSelection: (currentSelection: string[], valueToToggle: string, multiple: boolean) => string[];
export declare const getGroupSelection: (currentSelection: string[], groupOptions: ComboboxOption[]) => string[];
export declare const getAllValues: (allOptions: ComboboxOption[]) => string[];
export declare const getGroupSelectionState: (groupOptions: ComboboxOption[], selectedValues: string[]) => {
    selectedCount: number;
    allSelected: boolean;
    someSelected: boolean;
};
