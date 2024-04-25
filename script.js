//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get _name(){
		return this.name;
	}
	set _age(){
		return this.age;
	}
}

class Student extends Person {
	super(name,age);
	study(){
		console.log(`${name} is studying`);
	}
}

class Teacher extends Person {
	super(name,age);
	teach(){
		console.log(`${name} is teaching`);
	}
}

const person = new Person("John", 25);
console.log(person.name);
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
