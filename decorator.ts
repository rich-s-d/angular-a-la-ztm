//.at the end of the day decorators are just functions.

function MenuItem(itemID: string) {
    return (target: Function) => {
        target.prototype.id = itemID;
    } 
}

@MenuItem("abc")
class Pizza {
    id!: string;
    // constructor() {
    //     this.id = '123'
    // }
}

@MenuItem("def")
class Hamburger {
    id!: string; // if "strictPropertyInitialization": true then you need need to disable the strictPropertyInitialization rule with the !. or initalize the property with a default value in the constructor.
}

console.log(new Hamburger().id);
console.log(new Pizza().id);


//npx tsc will compile everything in the folder
//node decorator will run the decorator.ts file and output the result to the console.