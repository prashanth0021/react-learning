import type { Area } from "react-easy-crop";
export declare const getCroppedImg: (imageSrc: string, crop: Area) => Promise<Blob>;
export declare const urlToFile: (fileUrl: string, filename: string, mimeType: string) => Promise<File>;
