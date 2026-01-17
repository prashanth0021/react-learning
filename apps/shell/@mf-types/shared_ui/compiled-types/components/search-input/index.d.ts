export interface SearchInputClassNames {
    /** Root container div */
    root?: string;
    /** Search icon */
    icon?: string;
    /** The <input> element */
    input?: string;
    /** Clear/close button */
    clearButton?: string;
    /** Clear button icon */
    clearIcon?: string;
}
declare const SearchInput: ({ onSearchChange, value, defaultValue, searchPlaceholder, showSearchIcon, classNames, onFocus, inputTransform, }: {
    onSearchChange: (value: string) => void;
    value?: string;
    searchPlaceholder?: string;
    defaultValue?: string;
    showSearchIcon?: boolean;
    /** Fine-grained class customization for component slots */
    classNames?: SearchInputClassNames;
    onFocus?: () => void;
    /** Optional function to transform input value before storing (e.g., sanitize) */
    inputTransform?: (value: string) => string;
}) => import("react/jsx-runtime").JSX.Element;
export default SearchInput;
