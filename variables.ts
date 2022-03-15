
// below is a union type!
let myName: string | null = null;
myName = "Shane"

// Arrays. TS will automatically infer the type of the array (type inference). In this case, a union type.
let items = [3, "shane"];


// Objects. We can use the ? to denote that the property is optional.
const account: {
    name: string,
    balance: number,
    status?: number
} = {
    name: "Shane",
    balance: 100
};

// the following stores an array of objects.
let accounts: {}[];

// Interfaces to make objects look more readable. They outsource the typing of an object.

interface IAccount {
    name: string,
    balance: number,
    status?: number,
    deposit?: () => void // you can also define methods on an interface. no business logic but just a function signature (parameters and return type).
}

const account2: IAccount = {
    name: "Shane",
    balance: 100,
};