// function brewCoffee(){
//     console.log("Star brewing coffee");
//     const starttime = new  Date().getTime();
//     while(new Data().getTime() < starttime+3000);
//     console.log("Coffee is ready!🍵");
// }

// console.log("Ordering coffee");
// brewCoffee();
// console.log("Coffee recieved,doing other tacks.");

//Asynchronous
function brewCoffee(callback){
    return new Promise((resolve)=>{
      console.log("Star brewing coffee");
        setTimeout(()=>{
            console.log("Coffee is ready!🍵");
            callback()
        },3000)
    });
    
}

async function orderCoffee(){
    console.log("Ordering coffee");
    await brewCoffee();
    console.log("Coffee recieved,doing other tacks.");
}



