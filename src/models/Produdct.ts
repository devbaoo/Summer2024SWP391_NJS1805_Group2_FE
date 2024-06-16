export interface IProduct {
    id: number;
    name: string;
    origin: string;
    brand: string;
    ingredient: string;
    sweetLevel: string;
    flavour: string;
    sample: string | null;
    capacity: string;
    description: string;
    price: number;
    quantity: number;
    expireAt: string;
    createAt: string;
    status: string;
    productImages: any[];
}
