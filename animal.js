var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Distance covered: " + distance);
    };
    Animal.prototype.makeSound = function () { };
    ;
    return Animal;
}());
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion(name) {
        if (name === void 0) { name = "Lion"; }
        return _super.call(this, name) || this;
    }
    Lion.prototype.move = function (distance) {
        if (distance === void 0) { distance = 25; }
        console.log("...Running");
        _super.prototype.move.call(this, distance);
    };
    Lion.prototype.makeSound = function () {
        console.log("Roar...");
    };
    return Lion;
}(Animal));
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        if (name === void 0) { name = "Snake"; }
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log("Slither...");
        _super.prototype.move.call(this, distance);
    };
    Snake.prototype.makeSound = function () {
        console.log("Hissing...");
    };
    return Snake;
}(Animal));
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        if (name === void 0) { name = "Dog"; }
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 15; }
        console.log("Walking,Running...");
        _super.prototype.move.call(this, distance);
    };
    Dog.prototype.makeSound = function () {
        console.log("Bow Bow...");
    };
    return Dog;
}(Animal));
var Mice = (function (_super) {
    __extends(Mice, _super);
    function Mice(name) {
        if (name === void 0) { name = "Mice"; }
        return _super.call(this, name) || this;
    }
    Mice.prototype.move = function (distance) {
        if (distance === void 0) { distance = 2; }
        console.log("small steps");
        _super.prototype.move.call(this, distance);
    };
    Mice.prototype.makeSound = function () {
        console.log("Squeakk....");
    };
    return Mice;
}(Animal));
var l = new Lion();
console.log(l.name);
l.move();
l.makeSound();
var s = new Snake();
console.log(s.name);
s.move();
s.makeSound();
var d = new Dog();
console.log(d.name);
d.move();
d.makeSound();
var m = new Mice();
console.log(m.name);
m.move();
m.makeSound();
