// this keyword
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        document.write(this.firstName + " " + this.lastName);
    }
};
person.fullName();
