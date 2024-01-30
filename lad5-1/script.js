const acccount1 = {
    owner:"Prayuth Snow",
    user: "yuth",
    psw :"11111",
};
const acccount2 = {
    owner :"Lisa Lazoo",
    user : "lisa",
    psw :"abcd",
}
const acccounts = [acccount1, acccount2];
//ให้คำสั่ง find หา lisa แล้วค่อยหาตาม username

const btnLogin = document.getElementById(".login__btn");
const inputLoginUser = document.getElementById(".login__input--user");
const inputLoginPassword = document.querySelectorAll(".login__input--psw");
const lbWelcome = document.querySelector(".welcome");
const clear = document.getElementById(".clear");
let currentAcc;

btnLogin.addEventListener("click",(e) => {
    e.preventDefault();
    const user = inputLoginUser.Value;
    const password = inputLoginPassword.Value;
    
    currentAcc = acccounts.find((acc)=> acc.user === user);
    console.log(currentAcc);
    
    if (user === "admin" && password === "1234" ){
        lbWelcome.textContent = `ยินดีต้อนรับ${user}`;
        //ให้ clear input : user , input : psw
    }
})
c





