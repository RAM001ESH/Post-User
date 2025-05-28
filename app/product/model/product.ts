
export class Product {
    id: number = 0;
    title: string = '';
    price: number = 0;
    description: string = '';
    category: string = '';
    image: string = '';
    rating: Rating = new Rating()
}

export class Rating {
    rate: number = 0;
    count: number = 0;
}

export class AddProduct {
    title: string = '';
    price: number = 0;
    category: string = '';
    description: string = '';
    imageurl: string = '';
}


export const Menu = [
    {
        id: 1,
        parentID: 0,
        MenuName: 'Dashboard',
        MenuPath: '/dashboard',
        MenuIcon: 'fa-solid fa-chart-line'
    },
    {
        id: 2,
        parentID: 0,
        MenuName: 'Add / Edit',
        MenuPath: '/create',
        MenuIcon: 'fa-solid fa-circle-plus'
    },
]