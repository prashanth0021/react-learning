import { TimeFormat, type TimePeriod, type TimeValue } from "./types";
/**
 * Formats time to HH:MM string format
 * @param hours - Hour value (0-23 or 1-12 depending on format)
 * @param minutes - Minute value (0-59)
 * @returns Formatted time string (e.g., "09:30")
 */
export declare const formatTime: (hours: number, minutes: number) => string;
/**
 * Checks if a time slot is currently selected
 * @param selectedTime - Currently selected time value
 * @param hours - Hours of the time slot being checked
 * @param minutes - Minutes of the time slot being checked
 * @param tempPeriod - Current AM/PM selection for 12-hour format
 * @param format - Time format being used
 * @returns true if the time slot matches the selected time
 */
export declare const isTimeSlotSelected: (selectedTime: TimeValue | undefined, hours: number, minutes: number, tempPeriod: TimePeriod, format: TimeFormat) => boolean;
/**
 * Generates time slots based on interval and format
 * @param interval - Minutes between each time slot (15, 30, or 60)
 * @param format - Time format ("12h" or "24h")
 * @returns Array of [hours, minutes] tuples representing available time slots
 */
export declare const generateTimeSlots: (interval: number, format: TimeFormat) => [number, number][];
