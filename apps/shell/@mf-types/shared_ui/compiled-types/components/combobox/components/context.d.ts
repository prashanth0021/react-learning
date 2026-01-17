import * as React from "react";
import type { ComboboxContextType, ComboboxProps } from "../types";
export declare const ComboboxContext: React.Context<ComboboxContextType | undefined>;
export declare function useComboboxContext(): ComboboxContextType;
export declare function ComboboxContextProvider({ children, options, value, onChange, disabled, multiple, className, error, searchValue, onSearchChange, placeholder, searchPlaceholder, emptyMessage, emptyStateText, applyButtonText, selectAllButtonText, clearAllButtonText, clearButtonText, clearSearchAriaLabel, }: React.PropsWithChildren<ComboboxProps>): import("react/jsx-runtime").JSX.Element;
