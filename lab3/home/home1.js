const number = [1,2,3,4,5,6,7,8,9];
let sumFor = 0
let sumForeach = 0
let sumForin = 0
let sumForof = 0
for (let i = 0; i < number.length; i++) {
    // B = numA[i]%3;
    // if (B === 0) {
    //     console.log('3 หารลงตัว ${num}', numA[i]);
    // }
    // else if (B != 0) {
    //     console.log('ไม่ลงตัวหารลงตัว ', numA[i]);
    // } 
   number[i] % 3 === 0 ?(sumFor+=number[i]) :null;
}

number.forEach((num)=>(num % 3 === 0?(sumForeach+=num):null));

for(const i in number){
    number[i] % 3 === 0 ?(sumForin+=number[i]) :null;
}

for(const num of number){
    num % 3 === 0?(sumForof+=num):null;
}

console.log(`sumfor :  ${sumFor},\nsumForeach : ${sumForeach},\nsumForin : ${sumForin},\nsumForof : ${sumForof}`);

//map,reduce,Sort,Filter
//ให้สรา้ง sqrnumber[] ที่เอาแต่ละคำใน number มายกกำลังสอง

// const sqrnumber = [];
// let sumsqr = 0
// for (let i = 0; i < number.length; i++) {
//     sqrnumber[i] = number[i] ** 2;
//     sqrnumber.push(sqrnumber[i]**2);
//     console.log(sqrnumber[i]);
// }

 sqrnumber = number.map((num)=>{
     return num ** 2;
 })

console.log(sqrnumber);

//หารผลรวมของ number

const sumnumber = number.reduce((accumulator,currrentValue)=>{
    return accumulator + currrentValue;
},0);

console.log(sumnumber);
console.log(sqrnumber.reduce((acc,cur)=>acc+cur));

const rndnumber = [1,2,8,3,9,7,6,5,4,3]
const sortednumber = rndnumber.sort((a,b) => a - b);
//เรียง
console.log(sortednumber);

const evennumber = sortednumber.filter((num) => num % 2 === 0);
console.log(evennumber); //เทียบ
