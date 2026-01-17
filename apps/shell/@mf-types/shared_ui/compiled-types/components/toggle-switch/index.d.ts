export type ToggleOption<T extends string> = {
    label: string;
    value: T;
};
export type ToggleSwitchProps<T extends string> = {
    options: [ToggleOption<T>, ToggleOption<T>];
    value?: T;
    onChange?: (value: T) => void;
    className?: string;
};
declare const ToggleSwitch: <T extends string>({ options, value, onChange, className, }: ToggleSwitchProps<T>) => import("react/jsx-runtime").JSX.Element;
export default ToggleSwitch;
