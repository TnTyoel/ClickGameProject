class ClickGame {
    constructor() {
        this.score = 0;
        this.timeleft = 30;
        this.circle = document.createElement("div");
        this.circle.id = "circle";
        
        this.startBtn = document.getElementById("startBtn");
        this.gameArea = document.getElementById("game");
        this.timeDisplay = document.getElementById("time");
        this.scoreDisplay = document.getElementById("score");

        this.timerInterval = null;

        //Arrow function methods
        this.startGame = () => {
            this.reset();
            this.startBtn.style.display = "none";
            this.spawnCircle();
            this.circle.addEventListener("click", this.handleClick);
            this.timerInterval = setInterval(this.updateTimer, 1000);
            };
            
            this.reset = () => {
                this.score = 0;
                this.timeleft = 30;
                this.updateScore();
                this.updateTime();
            };
            
            this.spawnCircle = () => {
                const maxWidth = this.gameArea.clientWidth - 50;
                const maxHeight = this.gameArea.clientHeight - 50;

                const x = Math.random() * maxWidth;
                const y = Math.random() * maxHeight;

                this.circle.style.left = `${x}px`;
                this.circle.style.top = `${y}px`;

                this.gameArea.appendChild(this.circle);
            };

            this.handleClick = () => {
                this.score++;
                this.updateScore();
                this.spawnCircle();
            };

            this.updateTime = () => {
                this.timeDisplay.textContent = this.timeleft;
            };

            this.updateScore = () => {
                this.scoreDisplay.textContent = this.score;
            };

            this.updateTimer = () => {
                this.timeleft--;
                this.updateTime();

                if (this.timeleft <= 0) {
                    this.endGame();
                }
            };

            this.endGame = () => {
                clearInterval(this.timerInterval);
                this.circle.remove();
                alert(`Time's up! Final score: ${this.score}`)
                this.startBtn.style.display = 'inline-block';
            };

            //Bind start button
            this.startBtn.addEventListener("click", this.startGame);
                   
        }
    }
    const game = new ClickGame();