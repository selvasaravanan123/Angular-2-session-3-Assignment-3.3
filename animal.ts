class  Animal {
	public name: string;
	constructor(theName:string)
	{
		this.name = theName;
	}
	move(distance: number=0): void { console.log(`Distance covered: ${distance}`) }
	makeSound():void{};
}
class Lion extends Animal
{
	constructor(name:string="Lion")
	{
		super(name);
	}
	move(distance=25)
	{
		console.log(`...Running`)
		super.move(distance);
	}
	makeSound()
	{
		console.log("Roar...");
	}
}
class Snake extends Animal
{
	constructor(name:string="Snake")
	{
		super(name);
	}
	move(distance=5)
	{
		console.log("Slither...");
		super.move(distance);
	}
	makeSound()
	{
		console.log("Hissing...")
	}
}
class Dog extends Animal
{
	constructor(name:string="Dog")
	{
		super(name);
	}
	move(distance=15)
	{
		console.log("Walking,Running...");
		super.move(distance);
	}
	makeSound()
	{
		console.log("Bow Bow...")
	}
}
class Mice extends Animal
{
	constructor(name:string="Mice")
	{
		super(name);
	}
	move(distance=2)
	{
		console.log("small steps");
		super.move(distance);
	}
	makeSound()
	{
		console.log("Squeakk....");
	}
}
let l = new Lion();
console.log(l.name);
l.move();
l.makeSound();

let s = new Snake();
console.log(s.name);
s.move();
s.makeSound();

let d = new Dog();
console.log(d.name);
d.move();
d.makeSound();

let m = new Mice();
console.log(m.name);
m.move();
m.makeSound();