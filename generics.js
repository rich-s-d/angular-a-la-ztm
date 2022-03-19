// Generics. Allow classes to be strict and flexible at the same time.
// below creates a generic class, where the queue is a either all numbers or all strings but not a mix.
// Generics can also be used on functions and class methods!
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add("Shane");
var numberQueue = new Queue();
numberQueue.add(42);
function myFunction(input) {
    return input;
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myClassMethod = function (input) {
        return input;
    };
    return MyClass;
}());
