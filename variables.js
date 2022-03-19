// below is a union type!
var myName = null;
myName = "Shane";
// Arrays. TS will automatically infer the type of the array (type inference). In this case, a union type.
var items = [3, "shane"];
// Objects. We can use the ? to denote that the property is optional.
var account = {
    name: "Shane",
    balance: 100
};
// the following stores an array of objects.
var accounts;
var account2 = {
    name: "Shane",
    balance: 100
};
// Classes are blueprints for objects. In TS, you use the keyword implements to use an interface in a class.
var InvestmentAccount = /** @class */ (function () {
    // public must be set in the constructor to initialize the properties. 
    // otherwise in TS public is the default.
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () { };
    return InvestmentAccount;
}());
// Generics. Allow classes to be strict and flexible at the same time.
// see generics.ts for more info.
//TS also allows us to write next generation JS.
// Decorators. Allows us to add functionality to classes, functions, and variables.
//TC39 is a committee that is responsible for reviewing and implementing the proposals for the next version of the ECMAScript standard. 
// on github you can see the proposals for the next version of the standard. TC39.
// Decorators are used a lot in Angular and eventually they will be added to the JS standard.
// So a benefit of using TS is that you get your hands on features earlier, before they are added to JS.
//Decorators aim to avoid duplicate code.
