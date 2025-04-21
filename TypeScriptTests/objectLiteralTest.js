function objectLit() {
    var person = { name: "deepak", age: 30, isStudent: false };
    person.age = 31; // Updating an existing property
    console.log(person);
    return person.isStudent;
}
console.log(objectLit());
