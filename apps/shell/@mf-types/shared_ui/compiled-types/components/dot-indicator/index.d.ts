export type TFillType = "fill" | "border";
export type TDotIndicatorShape = "dot" | "square";
export type TIndicatorProps = {
    className: string;
    size?: number;
    fillType?: TFillType;
    shape?: TDotIndicatorShape;
};
declare const DotIndicator: ({ className, fillType, shape, size, }: TIndicatorProps) => import("react/jsx-runtime").JSX.Element;
export default DotIndicator;
