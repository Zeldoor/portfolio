export interface Content{
    id: number;
    title?: string;
    imageUrl: string;
    description?: string;
    doc?: Date;
    tags?: Tag[]
}

export enum Tag{
    PORTRAIT = 'portrait',
    WANAMA = 'wanama',
}