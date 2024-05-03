function Person(name, age) {
  this._name = name;
  this._age = age;
}

Person.prototype.getName = function() {
  return this._name;
}

Person.prototype.setAge = function(age) {
  this._age = age;
}

Person.prototype.getAge = function() {
  return this._age;
}

function Student(name, age) {
  Person.call(this, name, age);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function() {
  console.log(this.getName() + ' is studying');
}

function Teacher(name, age) {
  Person.call(this, name, age);
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function() {
  console.log(this.getName() + ' is teaching');
}

// Example usage:
var person = new Person("John", 25);
console.log(person.getName());

person.setAge(30);
console.log(person.getAge());

var student = new Student("Alice", 22);
student.study();

var teacher = new Teacher("Bob", 40);
teacher.teach();