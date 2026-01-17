export type TKeyDataItemLabel = {
    id: string;
    code: string;
    description: string;
};
export type TKeyDataItem = {
    label: TKeyDataItemLabel;
    colorClass: string;
};
export type TKeyData = TKeyDataItem[];
