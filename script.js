class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get Name() {
    return this._name;
  }

  set Age(age) {
    this._age = age;
  }

  get Age() {
    return this._age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.Name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.Name} is teaching`);
  }
}

// Example usage:
const person = new Person("John", 25);
console.log(person.Name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
