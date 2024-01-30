
// for (let i = 0; i < 10 ; i++) {
//     console.log('count numbur ${i}');    
// }
 const numArr = ["one","two","Three","Four","five"];

// for (let i = 0; i < numArr.length; i++) {
//     console.log(`ยกน้ำหนัก ครั้งที่ ${numArr[i]}`);
// }
// let count = 0;
// while (count < numArr.length) {
//     console.log(`count numbur ${numArr[count]}`);
//     count++;
// }
// numArr.forEach(function (num){
//     console.log(`show num ${num}`);
// });
// numArr.forEach((num) =>{
//     console.log(`num => ${num}`);
// });
// numArr.forEach((v,i,a)=>{
//  console.log(`num => ${v}, index => ${i}, array => ${a}`);
// });

const person = {
    name: 'John',
    age: 30,
    gender:"male",
};

for(const key in person){
    console.log(`${key} => ${person[key]}`);
};
for(const num of numArr){
    console.log(num);
};
