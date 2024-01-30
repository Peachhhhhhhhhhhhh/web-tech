document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const chgTextBtn = document.getElementById('changeTextBtn');
    const description = document.querySelector('.description');
    
    chgTextBtn.addEventListener('click', () => {
        title.textContent = 'HACKER DOM 🔓🔓🔓🔓';
        description.textContent = 'BY Napat';
    });

    const tglClsBtn = document.getElementById('ToggleClassBtn');
    tglClsBtn.addEventListener('click', () => {
        document.body.classList.toggle('active');
        if (document.body.classList.contains('active')) {
            description.style.color = 'green';
        } else {
            description.style.color = 'red';
        }
    });

    const link = document.getElementById('link');
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Link Clicked!!');
    });

    const gameArea = document.getElementById('gameArea');
    const scoreBoard = document.getElementById('scoreBoard');
    const strbtn = document.getElementById('startbtn');
    let score = 0;

    strbtn.addEventListener('click', () => {
        score = 0;
        scoreBoard.textContent = score;
        startGame();
    });

    const startGame = () => {
        const coin = createCoin();
        gameArea.appendChild(coin);

        coin.addEventListener('click', () => {
            score++;
            scoreBoard.textContent = score;
            gameArea.removeChild(coin);
            startGame();
        });
    };

    const createCoin = () => {
        const coin = document.createElement('div');
        coin.classList.add('coin');
        coin.style.top = Math.random() * (gameArea.offsetHeight - 30) + 'px';
        coin.style.left = Math.random() * (gameArea.offsetWidth - 30) + 'px';
        return coin;
    };
});
