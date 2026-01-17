import type { TimePeriod } from "./types";
type PeriodToggleProps = {
    period: TimePeriod;
    onPeriodChange: (period: TimePeriod) => void;
};
export declare const PeriodToggle: ({ period, onPeriodChange }: PeriodToggleProps) => import("react/jsx-runtime").JSX.Element;
export {};
