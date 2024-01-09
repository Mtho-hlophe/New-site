
const XPLAYER = 'X'
const OPLAYER = 'O'

let boxes = Array.from(document.getElementsByClassName('box'))
let currentPlayer = XPLAYER
let spaces = Array(9).fill(null)

var resetButton = document.querySelector('.resetBtn')
const winMessage = document.querySelector('#displayMessage')
const playAgainMessage = document.querySelector('#displayMessage2')

boxes.forEach(boxes => boxes.addEventListener('click', boxClicked))

function boxClicked(e){
    const id = e.target.id
    if(spaces[id] === null) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer  
        
        if(playerHasWon() !==false) {
            
            winMessage.innerText = `${currentPlayer} has won`
            winMessage.style.opacity = '1'
            spaces.fill(' ')
            
            setTimeout(()=>{
               playAgainMessage.style.opacity = '1' 
            },1500)
        } 
        // giving draw results 
        else {
        let falseBoolean = false
        
        for(let i=0; i<spaces.length; i++){
           if(spaces[i] == null){
               falseBoolean = true
           }
        }
            
          if(falseBoolean == false  && playerHasWon() == false){
        
           winMessage.innerText = 'DRAW'
           winMessage.style.opacity = '1'
           spaces.fill(' ')
           setTimeout(()=>{
                  playAgainMessage.style.opacity = '1' 
              },1500)
        }
        }
        countUp()
        drawFunc()
        currentPlayer = currentPlayer == XPLAYER? OPLAYER:XPLAYER
    }
    
};

//XPLAYER.style.backgroundColor = 'tomato'
//OPLAYER.style.backgroundColor = 'blueviolet'

const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

function playerHasWon(){
    for ( const combo of winningCombination) {
       let [a,b,c] = combo
      
    if (spaces[a] && (spaces[a] == spaces[b] &&  spaces[a] == spaces[c])) {
                        
        return [a,b,c]
    }
    }
    return false  
}

resetButton.addEventListener('click', resetFunc);

function resetFunc(){
    
    playAgainMessage.style.opacity = '0'
    winMessage.innerText = 'null';
    winMessage.style.opacity = '0'
    spaces.fill(null);
    boxes.forEach(boxes => boxes.innerText = '')
}
playAgainMessage.addEventListener('click', resetFunc)

//count script 

let countO = 0
let countX = 0
let countDraw = 0

const countDisplayO = document.getElementById('countO')
const countDisplayX = document.getElementById('countX')
const draw = document.querySelector('#draw')

function countUp(){
    if(playerHasWon() !== false && currentPlayer == OPLAYER){
    countO += 1
    countDisplayO.innerText = `O = ${countO}`
    }
    else if(playerHasWon() !== false && currentPlayer == XPLAYER){
    countX += 1
    countDisplayX.innerText = `X = ${countX}`
    }
    
}

function drawFunc() {

    if( winMessage.innerText == 'DRAW' && currentPlayer == XPLAYER){
    countDisplayX.innerText = `X = ${countX-1}`
    }
    else if( winMessage.innerText == 'DRAW' && currentPlayer == OPLAYER){
    countDisplayO.innerText = `O = ${countO-1}`
    }   
}
                
