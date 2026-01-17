/**
 * Time picker related types and constants
 */
/**
 * Time interval options for the time picker (in minutes)
 */
export declare const TimeInterval: {
    readonly FIFTEEN_MINUTES: 15;
    readonly THIRTY_MINUTES: 30;
    readonly SIXTY_MINUTES: 60;
};
export type TimeInterval = (typeof TimeInterval)[keyof typeof TimeInterval];
/**
 * Time format options
 */
export declare const TimeFormat: {
    readonly TWELVE_HOUR: "12h";
    readonly TWENTY_FOUR_HOUR: "24h";
};
export type TimeFormat = (typeof TimeFormat)[keyof typeof TimeFormat];
/**
 * Time period for 12-hour format
 */
export type TimePeriod = "AM" | "PM";
/**
 * Placeholder constants for time display
 */
export declare const TIME_PLACEHOLDER: {
    readonly TWELVE_HOUR: "--:-- --";
    readonly TWENTY_FOUR_HOUR: "--:--";
};
/**
 * Time value for 12-hour format with AM/PM
 */
export type TimeValue12 = {
    hours: number;
    minutes: number;
    period: TimePeriod;
};
/**
 * Time value for 24-hour format
 */
export type TimeValue24 = {
    hours: number;
    minutes: number;
};
/**
 * Union type for both time formats
 */
export type TimeValue = TimeValue12 | TimeValue24;
/**
 * Time picker component props
 */
export type TTimePickerProps = {
    selectedTime: TimeValue | undefined;
    onSelect: (time: TimeValue | undefined) => void;
    id: string;
    interval?: TimeInterval;
    format?: TimeFormat;
    asFormChild?: boolean;
    disabled?: boolean;
};
