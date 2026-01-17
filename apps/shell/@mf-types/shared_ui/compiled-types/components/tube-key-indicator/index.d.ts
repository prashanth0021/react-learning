import React from "react";
import type { TKeyDataItem } from "@/types/TDosKey";
type TubeKeyIndicatorProps = {
    value: string;
    className?: string;
    textClassName?: string;
};
export declare const SST: {
    id: string;
    code: string;
    description: string;
};
export declare const MSST: {
    id: string;
    code: string;
    description: string;
};
export declare const WTT: {
    id: string;
    code: string;
    description: string;
};
export declare enum FillType {
    Border = "border",
    Fill = "fill"
}
export declare enum DotShape {
    Dot = "dot",
    Square = "square"
}
export type ShapeStyle = {
    fillType: FillType;
    shape: DotShape;
    colorClass: string;
};
export declare const getShapeStyle: (item: TKeyDataItem) => ShapeStyle;
declare const TubeKeyIndicator: React.ForwardRefExoticComponent<TubeKeyIndicatorProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default TubeKeyIndicator;
