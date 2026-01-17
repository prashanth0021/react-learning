export type Option = {
    value: string;
    label: string;
    disable?: boolean;
    fixed?: boolean;
};
type MultipleSelectorProps = {
    value?: Option[];
    options?: Option[];
    placeholder?: string;
    onChange?: (opts: Option[]) => void;
    className?: string;
    maxSelected?: number;
    onMaxSelected?: (n: number) => void;
    disabled?: boolean;
    FormControl?: React.ElementType;
};
declare const MultiSelect: {
    ({ value, options: allOptions, placeholder, onChange, className, maxSelected, onMaxSelected, disabled, FormControl, }: MultipleSelectorProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default MultiSelect;
