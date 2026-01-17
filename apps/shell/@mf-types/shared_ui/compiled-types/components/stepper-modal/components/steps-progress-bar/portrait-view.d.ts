type TStep = {
    label: string;
};
interface PortraitViewProps {
    steps: TStep[];
    activeStep: number;
    className?: string;
}
declare const PortraitView: ({ steps, activeStep, className }: PortraitViewProps) => import("react/jsx-runtime").JSX.Element;
export default PortraitView;
