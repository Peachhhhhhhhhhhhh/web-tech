let machineNumber = Math.ceil(Math.random()*21);
let score = 10 ;
let higthscore = 0;


console.log(machineNumber)

document.querySelector(".btncheck").addEventListener("click",() =>{
    guess = document.querySelector(".guess").value ;
    if(guess >=1 || guess <=21 ){
        alert("โปรดค่าระหว่าง 1 - 21 ")
    }
    else{
        if (guess == machineNumber){
            document.querySelector('.message').textContent ="ชนะสักทีนะน้อง"
            document.querySelector('.secrrt').textContent = String(machineNumber)
            document.querySelector('.secrrt').style.backgroundColor = "green"
            if(score > higthscore){
                higthscore = score
                document.querySelector('.high-score').textContent = higthscore
            }
        }
        else if(guess > machineNumber){
            document.querySelector('.message').textContent ="มากไปละไอ่อ่อน"
            score--;
            
        }
        else if(guess < machineNumber){
            document.querySelector('.message').textContent ="น้อยไปละไอ่อ่อน"
            score--;
        }
        if(score >=0 ){
        document.querySelector('.score').textContent = score
        }
    }
    
})
document.querySelector(".recheck").addEventListener('click',() =>{
    machineNumber = Math.ceil(Math.random()*21);
    score=10;
    document.querySelector('.secrrt').textContent ="?"
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent ="เอาอีกหรอไอ่อ่อน"
    document.querySelector('.secrrt').style.backgroundColor = "gray"
})