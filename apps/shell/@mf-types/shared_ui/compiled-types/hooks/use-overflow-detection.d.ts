export interface UseOverflowDetectionOptions {
    /** Debounce delay for resize events (default: 150ms) */
    debounceDelay?: number;
    /** Check for vertical overflow as well (default: false) */
    checkVertical?: boolean;
    /** Disable overflow detection entirely (default: false) */
    disabled?: boolean;
}
export interface UseOverflowDetectionReturn<T extends HTMLElement> {
    /** Ref to attach to the element you want to monitor */
    ref: React.RefObject<T | null>;
    /** Whether the element is currently overflowing */
    isOverflowing: boolean;
    /** Manually trigger overflow check */
    checkOverflow: () => void;
}
/**
 * Hook to detect if an element's content is overflowing its container.
 * Supports both horizontal and vertical overflow detection with automatic
 * resize listening and manual triggering.
 *
 * @param options Configuration options for overflow detection
 * @returns Object containing ref, overflow state, and manual check function
 *
 * @example
 * ```tsx
 * const { ref, isOverflowing, checkOverflow } = useOverflowDetection<HTMLDivElement>();
 *
 * return (
 *   <div ref={ref} className="truncate">
 *     {isOverflowing && <Tooltip>Full content here</Tooltip>}
 *     Long content that might overflow...
 *   </div>
 * );
 * ```
 */
export declare function useOverflowDetection<T extends HTMLElement = HTMLDivElement>(options?: UseOverflowDetectionOptions): UseOverflowDetectionReturn<T>;
export default useOverflowDetection;
