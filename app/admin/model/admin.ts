export class Admin {
}

export class Post {
    id: string = '';
    Name: string = '';
    Mobile: string = '';
    Email: string = '';
    Age: string = '';
    Scheme: string = '';
    JoiningDate: string = '';
}


export class CreateUser {
    ContactID: string = '';
    Name: string = '';
    Mobile: string = '';
    Email: string = '';
    Scheme: string = '';
}

export const dateRanges = [
    { value: "Today", id: 1, disabled: false },
    { value: "This Week", id: 2, disabled: false },
    { value: "This Month", id: 3, disabled: false },
    { value: "This Year", id: 4, disabled: false },
    { value: "Last 30 days", id: 5, disabled: false },
    { value: "Last 3 Months", id: 7, disabled: false },
    { value: "Last 6 Months", id: 8, disabled: false },
    { value: "Last 12 Months", id: 9, disabled: false },
    { value: "Last Year", id: 10, disabled: false },
    { value: "Custom", id: 13, disabled: false },
];

/* CreateTransaction */
export class CreateTransaction {
    ContactID: string = '';
    Name: string = '';
    Scheme: string = '';
    Amount: number = 0;
    TranscationDate: string = '';
    CreditMonth: string = '';
    EntryBy: string = '';
}