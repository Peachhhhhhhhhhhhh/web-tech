console.log("Hello, JS");
console.log("เริ่มเรียนรู้ JS กันเล้ยย");

let title = "JavaScript";
console.log(title);

let firstname = "Pasin";
let age = 21;
let my_gpa = 3.35;

console.log(age);
age = 21;
console.log(age);

console.log(2023 - age);

const thisYear = 2023;
const birthYear = 2002;
console.log("I am " + thisYear - birthYear);

console.log("My birthyear is " + birthYear);
console.log("I am " + (thisYear - birthYear));

const lastname = "Sangjun";
console.log("My name is " + firstname + " " + lastname + ".");

let score = 14;

console.log(
  "Hello \n\
    World"
);

console.log("My name is " + firstname + " " + lastname + ".");
console.log(`I'm ${firstname} ${lastname}.`);

const ageMax = 20;

if (ageMax >= 18) {
  console.log("He can drive a car.");
} else {
  console.log("He can't drive a car.");
}

const yrMoney = 75;

console.log(typeof yrMoney);
console.log(typeof firstname);
console.log(typeof 3.1425);

age = 23
console.log(thisYear + age);
console.log(thisYear - age);
const strYear = "2023";
console.log(strYear + age);
console.log(strYear - age);

console.log(Number(strYear)+age);
console.log(Number(firstname));
console.log(typeof NaN);
console.log(Number(strYear),strYear);

console.log("I am "+ 18 + "years old");
console.log("2023" - 23);
console.log("2023" - "23" - 23);
console.log("2023" + "23" - 23);
console.log("14" * "7");
console.log("44" / "2");

console.log(1,Boolean(1));
console.log(0,Boolean(0));
console.log(23,Boolean(23));
console.log(-23,Boolean(-23));
console.log(Boolean(undefined));
console.log(firstname,Boolean(firstname));

if(firstname)
{
    console.log("He has a name");
}
const noname =" ";
console.log(Boolean(noname));

if(noname)
{
    console.log("He has a name")
}
else
{
    console.log("He has a name");
}

console.log(Boolean(null));

const isTrue = true
const isFalse = false

console.log(isTrue&&isFalse);
console.log(isTrue||isFalse);
console.log(!isFalse);

if (isTrue&& ! isFalse) {
  console.log("Only True and True will be will be the Truth");
}
/*โปรแกรม JavaScript เพื่อตรวจสอบว่าบุคคลหนึ่งสามารถเข้าชมสวนสนุกได้หรือไม่ โดยมีเงื่อนไขดังนี้:

อายุ age: ต้องมีอายุไม่น้อยกว่า 12 ปี และไม่เกิน 65 ปี
ส่วนสูง height: ต้องมีส่วนสูงไม่ต่ำกว่า 140 ซม.
ตั๋ว hasTicket: ต้องมีตั๋วเข้าชม
ให้สร้างตัวแปรเพื่อจำลองอายุ, ส่วนสูง, และสถานะการมีตั๋วของบุคคล และใช้ if statement ร่วมกับ boolean operators เพื่อตรวจสอบว่าบุคคลนั้นตรงตามเงื่อนไขทั้งหมดหรือไม่

ถ้าตรงตามเงื่อนไขทั้งหมดให้แสดงข้อความ "Welcome to the amusement park!" แต่ถ้าไม่ตรงตามเงื่อนไขใดเงื่อนไขหนึ่งให้แสดงข้อความ "Sorry, you cannot enter the amusement park."*/

 age = 25
const height = 165
const hasTicket =true

if( age >= 12 && age <= 65&& height>=140 && hasTicket){
  console.log("Welcome to the amusement park!");
}
else
{
  console.log("Sorry, you cannot enter the amusement park.");
}

const day = "wednesday"

switch (day) {
  case 'monday':
    console.log("Today is Monday")
    break;
  case 'tuesday':
    console.log("Today is Tuesday")
    break;
  case 'wednesday':
    console.log("Today is Wednesday")
    break;
  case 'thursday':
    console.log("Today is Thursday")
    break;
  case 'friday':
    console.log("Today is Friday")
    break;
  case'saturday':
    console.log("Today is Saturday")
    break;
  case'sunday':
    console.log("Today is Sunday")
    break;
  default:
    console.log("Not a valid day")
    break;
}

function convertTemp(value,unit) {
  let result ;

  switch(unit) {
    case 'Celsius':
      result = 
      {
        Fahrenheit: (value * 1.8) + 32,
        Kelvin : value + 273.15
      }
      break;
    case 'Fahrenheit':
      result = 
      {
        Celsius : (value - 32) / 1.8,
        Kelvin : ((value - 32)* 5/9) + 273.15 
      }
      break;
      case 'Kelvin':
        result= {
          Celsius : value - 273.15,
          Fahrenheit : (value - 273.15) * 1.8 + 32  
        }
      break;
      default:
        result ="Invalid unit"
  }
  return result;
}

console.log(convertTemp(23,"Celsius"));
console.log(convertTemp(73.4,"Fahrenheit"));

function groot() {
  console.log('I am Groot');
}
groot();

function calcAge(b_Year) {
  return 2024 - b_Year;
}
const age1 = calcAge(1999);
console.log(age1);

const calcAge = function(b_Year) {
  return 2024 - b_Year;
};
const age2 = calcAge(1999);

console.log(age2);

const calcAge3 = (b_Year) => 2024 - b_Year;
const age3 = calcAge(1999);
console.log(age3);

const calcCircumference = radius => 2 * Math.PI*radius

const calcArea = radius => Math.PI*radius*radius

const printCircleCalculations = radius =>{
  const Circumference = calcCircumference(radius);
  const Area = calcArea(radius);

  console.log(`For a circle with radius  ${radius}`);
  console.log(`Circumference${Circumference}`);
  console.log(`Area ${Area}`);
}
printCircleCalculations(10);

const friend1 = 'Stephen';
const friend2 = 'Frank';
const friend3 = 'Suzy';

console.log(friend1, friend2, friend3);

const friends = [friend1, friend2, friend3];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

firstname ='Jones';
const jones = [firstname,'Paa',1998,'police',friends];
console.log(jones,jones.length);
console.log("age" + jones[2]);

let numbers = [10,20,30,40,50,];

numbers.push(60);
numbers.pop();

numbers.forEach(number => console.log(number));

let fruits = ['Apple', 'Banana', 'orange' ];

console.log(fruit[2]);
fruit[2] = "Blueberry";

console.log(fruits);

let users = [
  {name: 'Ada', age: 35,},
  {name: 'Dennis', age:20},
  {name: 'Oreo', age:42},
];

let findOreo =users.find(user => user.name ==="Oreo");

users.push({name: 'Joseph', age:60});
users = users.filter(user => user.name !="Oreo");
users.shift();
users.pop();

const dave = {
  firstname: "Dave",
  lastname: "Rogers",
  job : "programmer",
  salary :55000,
  age : thisYear-2000,
  friends:["Ken","Ryu","Vega"],
};

console.log('${dave.firstname}${dave.lastname}has${dave.friends.length} friends ,and his best friend${dave.friends.[0]}.');
