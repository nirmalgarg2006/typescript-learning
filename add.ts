function addnumbers(num1:number, num2:number) {
  return num1 + num2;
}

let employee : {
  id:number,
  name:string,
  city:string
}

employee = {
  id:100,
  name : 'Nirmal',
  city : 'Pune'
}

let result:number;
result = addnumbers(10,55);

const num:number = 100;
console.log(typeof num);

console.log('addition of two numbers : ' + result);
console.log(employee.name);

let firstname:string = "Nirmal";
let lastname:string = 'Garg';
let fullname:string = '';
fullname = `${firstname} ${lastname}`;
console.log(fullname);

let cars:string[] = ['Honda','Toyota', 'Kia','Tata'];
for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  console.log(element);
}

for(let index in cars)
{
  console.log(cars[index]);
}

//Tuple new datatype that can have different datatype

//let employee:[number, string, string]= [23, 'Nirman Garg', 'Class - Sr. Kg'];



let sum = (a:number, b:number) :number => {
  return a+b;
}


let sumoutput:number = sum(44,76);
console.log(sumoutput);

let Print = () => console.log("Hello TypeScript");

Print(); //Output: Hello TypeScript

function getMessage(message:string):string {
  message = `"Hello! how are you doing today?" ${message}`;
  return message;
}

let greeting:string = getMessage("Nirmal");
console.log(greeting);

let fun1 = function printname(name:string) {
  console.log(`"Name : ${name}"`);

}

console.log(fun1("Neha"));

//optinal parameter to function
function Greet(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

console.log(Greet('Hello','Steve'));
console.log(Greet('Hi'));

Greet('Hello','Steve');//OK, returns "Hello Steve!"
Greet('Hi'); // OK, returns "Hi undefined!".
//Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.
