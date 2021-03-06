
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

// Classes are blueprints for objects. In TS, you use the keyword implements to use an interface in a class.
class InvestmentAccount implements IAccount {
    // public must be set in the constructor to initialize the properties. 
    // otherwise in TS public is the default.
    constructor(public name: string, public balance: number) {
    }

    private withdraw(){}
}

// Generics. Allow classes to be strict and flexible at the same time.
// see generics.ts for more info.

//TS also allows us to write next generation JS.

// Decorators. Allows us to add functionality to classes, functions, and variables.

//TC39 is a committee that is responsible for reviewing and implementing the proposals for the next version of the ECMAScript standard. 
// on github you can see the proposals for the next version of the standard. TC39.
// Decorators are used a lot in Angular and eventually they will be added to the JS standard.
// So a benefit of using TS is that you get your hands on features earlier, before they are added to JS.

//Decorators aim to avoid duplicate code.