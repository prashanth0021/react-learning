import type React from "react";
interface TFooterProps {
    currentStep: number;
    totalSteps: number;
    onNext: () => void;
    onPrevious: () => void;
    isNextDisabled?: boolean;
    finalActionLabel: string;
    className?: string;
    footerButtonsClassName?: string;
    nextButtonClassName?: string;
    previousButtonClassName?: string;
    labels?: {
        next: string;
        previous: string;
    };
    tertiaryCTA?: {
        label: string;
        onClick: () => void;
        icon?: React.ReactNode;
        showAlways?: boolean;
        showOnSteps?: number[];
    };
}
declare const Footer: React.FC<TFooterProps>;
export default Footer;
