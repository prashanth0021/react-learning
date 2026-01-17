import type React from "react";
import type { OrientationMode } from "@/hooks/use-get-layout-orientation";
export type TCustomNextAction = (() => Promise<boolean | undefined> | boolean | undefined) | undefined;
export interface StepperModalClassNames {
    content?: string;
    header?: string;
    title?: string;
    icon?: string;
    closeButton?: string;
    progressBar?: string;
    stepContent?: string;
    footer?: string;
    footerButtons?: string;
    nextButton?: string;
    previousButton?: string;
}
export interface StepComponentProps {
    setIsNextDisabled: (disabled: boolean) => void;
    setCustomNextAction: React.Dispatch<React.SetStateAction<TCustomNextAction>>;
}
export interface TProcessModalProps {
    steps: {
        label: string;
        component: React.ComponentType<StepComponentProps>;
    }[];
    finalActionLabel: string;
    setOpen: (open: boolean) => void;
    heading: string;
    icon: React.ElementType;
    modalContentClassName?: string;
    classNames?: StepperModalClassNames;
    labels?: {
        step: string;
        of: string;
    };
    footerLabels?: {
        next: string;
        previous: string;
    };
    orientation?: OrientationMode;
    tertiaryCTA?: {
        label: string;
        onClick: () => void;
        icon?: React.ReactNode;
        showAlways?: boolean;
        showOnSteps?: number[];
    };
    onStepChange?: (step: number) => void;
}
export type TCommonViewProps = Omit<TProcessModalProps, "modalContentClassName" | "onStepChange" | "tertiaryCTA" | "labels" | "footerLabels"> & {
    activeStep: number;
    onNext: () => void;
    onPrevious: () => void;
    isNextDisabled: boolean;
    setIsNextDisabled: StepComponentProps["setIsNextDisabled"];
    setCustomNextAction: StepComponentProps["setCustomNextAction"];
    labels: {
        step: string;
        of: string;
    };
    footerLabels: {
        next: string;
        previous: string;
    };
};
export type TLandscapeViewProps = TCommonViewProps & {
    tertiaryCTA?: TProcessModalProps["tertiaryCTA"];
};
