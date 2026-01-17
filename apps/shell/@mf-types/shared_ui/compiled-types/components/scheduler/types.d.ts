import type { Locale } from "date-fns";
import type { ReactNode } from "react";
import type { CalendarProps, DateCellWrapperProps, Event } from "react-big-calendar";
export type TEvent = Event & {
    updated?: boolean;
};
export type SchedulerProps = CalendarProps & {
    disabledDates?: Date[];
    supportedLocales?: Locale[];
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};
export interface CustomDateCellWrapperProps extends DateCellWrapperProps {
    events: TEvent[] | undefined;
    disabledDates?: Date[];
}
export type TimeSlotWrapperProps = {
    children: ReactNode;
    value: Date;
    step: number;
};
export interface CustomTimeSlotWrapperProps extends TimeSlotWrapperProps {
    events: TEvent[] | undefined;
}
