import "tailwind-css";
export type CustomInputProps = Omit<React.ComponentProps<"input">, "onChange"> & {
    type?: React.HTMLInputTypeAttribute;
    onChange: (val: string) => void;
    leftIcon?: React.ReactNode;
};
declare const CustomInput: ({ type, placeholder, value, onChange, leftIcon, className, ...props }: CustomInputProps) => import("react/jsx-runtime").JSX.Element;
export default CustomInput;
