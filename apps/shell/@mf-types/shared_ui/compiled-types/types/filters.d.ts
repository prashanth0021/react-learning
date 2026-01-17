export type TFilterValues = Record<string, unknown>;
export interface TFilterComponentOwnProps<T extends TFilterValues> {
    children: (props: {
        values: T;
        onChange: (key: keyof T, value: T[keyof T]) => void;
        setLocalState: React.Dispatch<React.SetStateAction<T>>;
    }) => React.ReactNode;
}
export type TFilterProps<T extends TFilterValues> = TFilterComponentOwnProps<T> & {
    values: T;
    onChange: (key: keyof T, value: T[keyof T]) => void;
    onApply: () => void;
    onClearAll: () => void;
    loading?: boolean;
    activeFilterCount?: number;
    setLocalState: React.Dispatch<React.SetStateAction<T>>;
    localState: T;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    labels?: {
        filters: string;
        clearAll: string;
        showResults?: string;
    };
};
