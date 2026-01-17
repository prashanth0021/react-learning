import type { ComponentProps, ReactElement } from "react";
import EmptyState from "@/components/empty-state";
export declare enum SortDirection {
    Desc = "desc",
    Asc = "asc"
}
export type TRowMetaInfo = {
    id: string;
    onRowClick?: (id: string) => void;
    disabled?: boolean;
    unread?: boolean;
};
declare const TableRow: ({ className, ...props }: ComponentProps<"tr">) => import("react/jsx-runtime").JSX.Element;
declare const TableCell: ({ className, ...props }: ComponentProps<"td">) => import("react/jsx-runtime").JSX.Element;
export interface Column<T> {
    id: keyof T;
    label: ReactElement | string;
    align?: "left" | "center" | "right";
    hasSort?: boolean;
    className?: string;
}
export interface AppTableProps<T> {
    headers: Array<Column<T>>;
    data: Array<T & TRowMetaInfo>;
    emptyState?: ComponentProps<typeof EmptyState>;
    isLoading?: boolean;
    labels?: {
        loading: string;
    };
    isSelectRowDisabled?: boolean;
    /**
     * Minimum width for the table.
     * specify the unit (e.g., "62.5rem").
     * @default "62.5rem"
     */
    minWidth?: string;
    className?: string;
    onSort?: (id: string, dir: SortDirection.Desc | SortDirection.Asc) => void;
    onBottomReached?: () => void;
}
declare function DataTable<T>({ onSort, onBottomReached, headers, data, emptyState, isLoading, labels, isSelectRowDisabled, minWidth, className, ...props }: AppTableProps<T>): import("react/jsx-runtime").JSX.Element;
export { DataTable, TableRow, TableCell };
export default DataTable;
