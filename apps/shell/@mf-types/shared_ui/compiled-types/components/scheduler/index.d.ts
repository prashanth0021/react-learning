import { dateFnsLocalizer, type ToolbarProps } from "react-big-calendar";
import "tailwind-css";
import "./index.css";
export type { CalendarProps } from "react-big-calendar";
import type { SchedulerProps, TEvent } from "./types";
export declare const Scheduler: ({ components, events, disabledDates, timeslots, step, messages, supportedLocales, culture: customCulture, startAccessor, endAccessor, weekStartsOn, ...restProps }: SchedulerProps) => import("react/jsx-runtime").JSX.Element;
export type { SchedulerProps, ToolbarProps, TEvent };
export { dateFnsLocalizer };
