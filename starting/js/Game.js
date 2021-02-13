class Game {
    // no extra stuff when defining
    // Game ends up having 3 properties: player, background and obstacles (array)
    constructor() {
        this.background = new Background();
        this.obstacles = [];
        this.player = new Player();
    }
    setup() {}

    keyPressed() {
        this.player.keyPressed();
    }

    draw() {
        clear();
        this.background.draw();
        if (frameCount % 90 === 0) {
            this.obstacles.push(new Obstacle())
        };

        this.obstacles.forEach((obstacle, index) => {
            obstacle.draw();
            
            if (obstacle.x <= -obstacle.width) {
                this.obstacles.splice(index, 1)
            }

            if (this.collisionCheck(this.player, obstacle)) {
                console.log("WATCH OUT FOR THE THINGY");
            }
        });

        this.player.draw();
    }

    collisionCheck(player, obstacle) {
        const playerTopArea = player.y;
        const playerLeftArea = player.x;
        const playerRightArea = player.x + player.width; 
        const playerBottomArea = player.y + player.height;

        const obstacleTopArea = obstacle.y;
        const obstacleLeftArea = obstacle.x;
        const obstacleRightArea = obstacle.x + obstacle.width; 
        const obstacleBottomArea = obstacle.y + obstacle.height;

        const isTouchingOnLeft = obstacleRightArea > playerLeftArea;
        const isTouchingOnBottom = obstacleTopArea < playerBottomArea;
        const isTouchingOnRight = obstacleLeftArea < playerRightArea;
        const isTouchingOnTop = obstacleBottomArea > playerTopArea;
        return (
            isTouchingOnLeft &&
            isTouchingOnBottom &&
            isTouchingOnRight &&
            isTouchingOnTop
        );
    }
}