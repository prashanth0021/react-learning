type TStep = {
    label: string;
};
interface LandscapeViewProps {
    steps: TStep[];
    activeStep: number;
    className?: string;
}
declare const LandscapeView: ({ steps, activeStep, className, }: LandscapeViewProps) => import("react/jsx-runtime").JSX.Element;
export default LandscapeView;
