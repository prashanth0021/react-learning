import type { ZodSchema } from "zod";
export type TFileInputProps = {
    file: File | undefined;
    setFile: (file?: File) => void;
    schema: ZodSchema<File | undefined>;
    id: string;
    accept?: string;
    placeholder?: string;
    helperText?: string;
    className?: string;
    externalError?: string;
    labels?: {
        browseFiles: string;
        clinicLogoPreview: string;
        invalidFile: string;
    };
};
declare const FileInput: ({ file, setFile, schema, id, externalError, accept, placeholder, helperText, className, labels, }: TFileInputProps) => import("react/jsx-runtime").JSX.Element;
export default FileInput;
export { DEFAULT_FILE_INPUT_ACCEPT, DEFAULT_FILE_TYPES, MAX_FILE_SIZE, } from "./constants";
