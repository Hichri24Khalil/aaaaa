export interface Product {
    image: string,
    uname: string,
    gmail: string,
    productName: string,
    status: string,
    weeks: number,
    budget: string
}

export interface TableRows {
    fname: string,
    lname: string,
    uname: string,
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'ahmed naoui',
        gmail: 'ahmednaoui@gmail.com',
        productName: 'Farmtone NPK',
        status: 'danger',
        weeks: 2,
        budget: '40 dt'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'slim amara',
        gmail: 'slimamarag@gmail.com',
        productName: 'Greenpeace Neemol ',
        status: 'info',
        weeks: 1,
        budget: '10 dt'
    },
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'eya ben haj',
        gmail: 'eyahaj@gmail.com',
        productName: 'Grade no. 2',
        status: 'warning',
        weeks: 3,
        budget: '12 dt'
    },
    

]

export const Employee : TableRows[] = [
    {
        fname: "Mark",
        lname: "Otto",
        uname: "@mdo",
    },
    {
        fname: "Jacob",
        lname: "Thornton",
        uname: "@fat",
    },
    {
        fname: "Larry",
        lname: "the Bird",
        uname: "@twitter",
    }
]