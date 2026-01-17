import "./index.css";
export type PreviewImageModalProps = {
    file: File;
    imageUrl: string;
    onSave: ({ croppedFile, zoom, crop, }: {
        croppedFile: File;
        zoom: number;
        crop: {
            x: number;
            y: number;
        };
    }) => void;
    heading: string;
    setOpen: (open: boolean) => void;
    handleModalClose: () => void;
    initialZoom?: number;
    initialCrop?: {
        x: number;
        y: number;
    };
    labels?: {
        zoomIn: string;
        zoomOut: string;
    };
};
declare const PreviewImageModal: ({ file, imageUrl, onSave, heading, setOpen, handleModalClose, initialZoom, initialCrop, labels, }: PreviewImageModalProps) => import("react/jsx-runtime").JSX.Element;
export default PreviewImageModal;
