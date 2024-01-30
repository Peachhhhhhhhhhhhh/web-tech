const data =[
    {id :1 ,value :10},
    {id :2 ,value :5},
    {id :3 ,value :9},
    {id :4 ,value :12},
    {id :5 ,value :6},
];
//สร้าง arr ที่มีแต่ values จากนั้นให่กรองเฉพาะค่าที่ หารด้วย 3 ลงตัวแล้วจึงหาผลรวมของผลที่ได้้

// const arr = data.filter((item)=>{
//     return item.value % 3 === 0;
// }).map((item)=>{
//     return item.value;
// }).reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// },0);
// console.log(`result : ${arr}`);

const arr = data.filter((item)=>item.value % 3 );
console.log(arr);
const mod3 = arr.filter((value)=>value % 3 ===0);
console.log(mod3);
const sumMod3 = mod3.reduce((acc,cur) => acc + cur,0);
console.log(sumMod3);