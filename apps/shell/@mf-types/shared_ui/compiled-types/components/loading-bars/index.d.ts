import "./index.css";
export type TLoadingBarsProps = Partial<{
    loadingText: string;
    barCount: number;
    barWidth: number;
    barSpacing: number;
    barHeight: number;
    loadingTextClassName: string;
    wrapperClassName: string;
}>;
declare const LoadingBars: ({ loadingText, loadingTextClassName, wrapperClassName, barCount, barWidth, barSpacing, barHeight, }: TLoadingBarsProps) => import("react/jsx-runtime").JSX.Element;
export default LoadingBars;
