import { type TextareaHTMLAttributes } from "react";
export type CustomTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> & {
    value: string;
    label?: string;
    error?: string;
    charLimit?: string;
    FormControl?: React.ElementType;
    FormMessage?: React.ElementType;
    onChange: (val: string) => void;
};
declare const CustomTextArea: ({ onChange, value, error, charLimit, className, FormControl, FormMessage, ...props }: CustomTextAreaProps) => import("react/jsx-runtime").JSX.Element;
export default CustomTextArea;
