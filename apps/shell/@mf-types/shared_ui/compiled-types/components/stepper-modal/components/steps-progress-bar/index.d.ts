import { OrientationMode } from "@/hooks/use-get-layout-orientation";
type TStep = {
    label: string;
};
interface TStepProgressBarProps {
    steps: TStep[];
    activeStep: number;
    orientation?: OrientationMode;
    className?: string;
}
declare const StepProgressBar: ({ steps, activeStep, orientation, className, }: TStepProgressBarProps) => import("react/jsx-runtime").JSX.Element;
export default StepProgressBar;
