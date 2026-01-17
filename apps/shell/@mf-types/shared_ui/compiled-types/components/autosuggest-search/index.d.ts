import { type ReactNode } from "react";
import { type SearchInputClassNames } from "../search-input";
export interface Suggestion {
    id: string | number;
    searchValue: string;
    label: ReactNode;
}
export interface AutosuggestSearchClassNames {
    /** Root popover container */
    root?: string;
    /** PopoverAnchor wrapper around SearchInput */
    anchor?: string;
    /** SearchInput component (shorthand for searchInputClassNames.root) */
    searchInput?: string;
    /** Fine-grained SearchInput customization */
    searchInputClassNames?: SearchInputClassNames;
    /** PopoverContent dropdown container */
    popoverContent?: string;
    /** ScrollArea wrapper */
    scrollArea?: string;
    /** The <ul> list container */
    list?: string;
    /** Empty state <li> item */
    emptyStateItem?: string;
    /** Suggestion <li> items */
    suggestionItem?: string;
    /** Inner content wrapper inside suggestion item */
    suggestionContent?: string;
    /** Suggestion label text */
    suggestionLabel?: string;
}
export interface AutosuggestSearchProps {
    emptyState: string | ReactNode;
    searchPlaceholder: string;
    searchSuggestions: Suggestion[];
    isLoading?: boolean;
    onSearchChange: (value: string) => void;
    onSuggestionSelect: (suggestion: Suggestion) => void;
    /** Fine-grained class customization for component slots */
    classNames?: AutosuggestSearchClassNames;
    /** Show/hide the search icon in the input (default: true) */
    showSearchIcon?: boolean;
    /** Optional function to transform input value before storing (e.g., sanitize) */
    inputTransform?: (value: string) => string;
}
declare const AutosuggestSearch: ({ emptyState, searchPlaceholder, searchSuggestions, isLoading, onSearchChange, onSuggestionSelect, classNames, showSearchIcon, inputTransform, }: AutosuggestSearchProps) => import("react/jsx-runtime").JSX.Element;
export default AutosuggestSearch;
