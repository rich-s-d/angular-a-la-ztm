// Generics. Allow classes to be strict and flexible at the same time.
// below creates a generic class, where the queue is a either all numbers or all strings but not a mix.
// Generics can also be used on functions and class methods!

class Queue<T> { // T is convention (stands for Type) and simply a placeholder for the type that is declared when a class is instantiated.
    private data: T[] = [];

    add(item: T) {
        this.data.push(item);
    }
    remove() {
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add("Shane");
const numberQueue = new Queue<number>();
numberQueue.add(42);


function myFunction<T>(input:T[]): T[] {
    return input
}


class MyClass {
    myClassMethod<T>(input:T[]): T[] {
        return input
    }
}
    
