import { type ComponentProps } from "react";
import { Calendar } from "@/components/calender";
export type TDatePickerProps = {
    selectedDate: Date | undefined;
    onSelect: (date: Date | undefined) => void;
    id: string;
    calendarProps?: Omit<ComponentProps<typeof Calendar>, "mode" | "selected" | "onSelect">;
    asFormChild?: boolean;
    disabled?: boolean;
    dateFormat?: string;
    placeholder?: string;
};
export declare const DatePicker: ({ selectedDate, onSelect, id, calendarProps, asFormChild, disabled, dateFormat, placeholder, }: TDatePickerProps) => import("react/jsx-runtime").JSX.Element;
