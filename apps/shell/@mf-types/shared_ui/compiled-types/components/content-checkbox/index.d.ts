export type ContentCheckboxProps = {
    title: string;
    subtitle?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    asFormChild?: boolean;
    id?: string;
    name?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;
export declare const ContentCheckbox: ({ title, subtitle, checked, onChange, asFormChild, id, name, ...rest }: ContentCheckboxProps) => import("react/jsx-runtime").JSX.Element;
