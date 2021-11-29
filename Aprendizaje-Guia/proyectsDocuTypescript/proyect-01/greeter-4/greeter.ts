class Student {
    //Atributo de la clase
    fullName: String;

    //Constructor de la clase
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
   
  let user = new Student("Jane", "M.", "User");
   
  document.body.textContent = greeter(user);