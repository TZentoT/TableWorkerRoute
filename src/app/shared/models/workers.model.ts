export interface MyWorkers {
    id?: number;
    surname: string;
    name: string;
    patronymic: string;
    phone: string;
    email: string;
    birthday: string;
    type: number;
}

export enum MyWorkersType {
    IT,
    sales,
    delivery,
    legal,
}