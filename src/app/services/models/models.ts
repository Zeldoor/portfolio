export interface Content{
    id: number;
    title?: string;
    imageUrl: string;
    description?: string;
    doc?: Date;
}

export interface SidebarButton{
    id: number;
    label: string;
    path: string;
    image?: string;
}