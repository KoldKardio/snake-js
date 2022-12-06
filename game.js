import { SNAKE_SPEED, update as uSnake, draw as dSnake, getSnakeHead, snakeBite } from "./snake.js"
import { update as uFood, draw as dFood} from "./food.js"
import {outsideGrid} from "./grid.js"
//
//
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    if (gameOver) {
        //return alert("You lose!")
        if (confirm("You lost! Press OK to Restart.")) {
            //window.location = '/'
            window.location.reload(1)
        }
        return
    }
    //
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    //
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    //
    lastRenderTime = currentTime
    //
    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    uSnake()
    uFood()
    Death()
}
function draw(){
    gameBoard.innerHTML = ''
    dSnake(gameBoard)
    dFood(gameBoard)
}

function Death() {
    gameOver = outsideGrid(getSnakeHead()) || snakeBite()
}