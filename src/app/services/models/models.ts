// export interface Content{
//     id: number;
//     title?: string;
//     imageUrl: string;
//     description?: string;
//     doc?: Date;
// }

export interface SidebarButton{
    id: number;
    label: string;
    path: string;
    image?: string;
}

export interface Content{
    id: string;
    name: string;
    imageUrl?: string;
    description?: string;
    webContentLink: string;
}

export interface User{
    firstName: string,
    lastName: string,
    nick: string,
    birthDate: string,
    age: number,
    description: string,
    gender: string,
    city: string,
}