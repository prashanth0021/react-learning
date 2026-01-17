export type TSlidingPanelProps = {
    isOpen: boolean;
    onClose: () => void;
    width?: string;
    className?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
};
declare const SlidingPanel: ({ isOpen, width, className, header, footer, children, }: TSlidingPanelProps) => import("react/jsx-runtime").JSX.Element;
export default SlidingPanel;
