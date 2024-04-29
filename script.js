class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get Name() {
    return this.name;
  }

  set Age(age) {
    this.age = age;
  }

  get Age() {
    return this.age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage:
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
