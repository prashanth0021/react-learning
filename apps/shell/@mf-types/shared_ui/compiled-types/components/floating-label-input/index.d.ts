export type TFloatingLabelInputProps = Omit<React.ComponentProps<"input">, "onChange" | "placeholder"> & {
    onChange: (val: string) => void;
    label: string;
};
declare const FloatingLabelInput: ({ label, value, onChange, className, id: idProp, ...props }: TFloatingLabelInputProps) => import("react/jsx-runtime").JSX.Element;
export default FloatingLabelInput;
