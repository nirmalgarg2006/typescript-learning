function addnumbers(num1, num2) {
    return num1 + num2;
}
var employee;
employee = {
    id: 100,
    name: 'Nirmal',
    city: 'Pune'
};
var result;
result = addnumbers(10, 55);
var num = 100;
console.log(typeof num);
console.log('addition of two numbers : ' + result);
console.log(employee.name);
var firstname = "Nirmal";
var lastname = 'Garg';
var fullname = '';
fullname = firstname + " " + lastname;
console.log(fullname);
var cars = ['Honda', 'Toyota', 'Kia', 'Tata'];
for (var index = 0; index < cars.length; index++) {
    var element = cars[index];
    console.log(element);
}
for (var index in cars) {
    console.log(cars[index]);
}
//Tuple new datatype that can have different datatype
//let employee:[number, string, string]= [23, 'Nirman Garg', 'Class - Sr. Kg'];
var sum = function (a, b) {
    return a + b;
};
var sumoutput = sum(44, 76);
console.log(sumoutput);
var Print = function () { return console.log("Hello TypeScript"); };
Print(); //Output: Hello TypeScript
function getMessage(message) {
    message = "\"Hello! how are you doing today?\" " + message;
    return message;
}
var greeting = getMessage("Nirmal");
console.log(greeting);
var fun1 = function printname(name) {
    console.log("\"Name : " + name + "\"");
};
console.log(fun1("Neha"));
//optinal parameter to function
function Greet(greeting, name) {
    return greeting + ' ' + name + '!';
}
console.log(Greet('Hello', 'Steve'));
console.log(Greet('Hi'));
Greet('Hello', 'Steve'); //OK, returns "Hello Steve!"
Greet('Hi'); // OK, returns "Hi undefined!".
//Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.
function increaseCount(){
  counter = counter + 1;
}
