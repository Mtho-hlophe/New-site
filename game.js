const nothing = 'nothing'
const welcomeBanner = document.querySelector(".welcome")
const content = document.querySelector('.container')
const rules = document.querySelector('#rules')
var trackerArray = [1]
function gameContent() {
    
    welcomeBanner.style.display = 'none'
    content.style.display = 'flex'
    
    return content.innerHTML = `<div class="game">
            <div id="displayPlayer"></div>
            <div class="row">
                <div class="centerPart" id="0"></div>
            </div>
            <div class="row row2">
                <div class="centerPart" id="1"></div>
                <div class="centerPart" id="2"></div>
                <div class="centerPart" id="3"></div>
            </div>
            <div class="row row2">
                <div class="centerPart" id="4"></div>
                <div class="centerPart" id="5"></div>
                <div class="centerPart" id="6"></div>
            </div>
            <div class="row row2">
                <div class="centerPart" id="7"></div>
                <div class="centerPart" id="8"></div>
                <div class="centerPart" id="9"></div>
            </div>
            <div class="row">
                <div class="centerPart" id="10"></div>
            </div>
        </div>`              
}

function toggleGameRules() {
    if (rules.style.display == 'none') {
        rules.style.display = 'block'
    }
    else {
        rules.style.display = 'none'
    }
}
var currentPlayer;
let rabbit = 'Rabbit'
let dog = 'Dog'

var dogBackgroundImage = "url('1200px-Dog_Silhouette_01.svg.png')"
var rabbitBackgroundImage = "url('bunny-rabbit-silhouette-farm-animal-free-svg-file-SvgHeart.Com.png')"
var currentPlayerImage;

function game() {

       let displayPlayerTurn = document.querySelector('#displayPlayer')
       let boxes = Array.from(document.querySelectorAll('.centerPart'))
       currentPlayer = rabbit
       currentPlayerImage = rabbitBackgroundImage
       
       displayPlayerTurn.innerHTML = `<h3>To play: ${currentPlayer}</h3>`
       boxes[5].innerText = currentPlayer       
       boxes[5].style.backgroundImage = rabbitBackgroundImage
       boxes[7].innerText = dog         
       boxes[7].style.backgroundImage = dogBackgroundImage
       boxes[8].innerText = dog           
       boxes[8].style.backgroundImage = dogBackgroundImage
       boxes[9].innerText = dog           
       boxes[9].style.backgroundImage = dogBackgroundImage
       
       boxes.forEach( box => box.addEventListener('click', selectRabbit))
       
          function selectRabbit(event) {
          let id = event.target.id
              if (boxes[id].innerText == currentPlayer || boxes[id].style.backgroundImage == currentPlayerImage ) {
                  boxes[id].style.borderColor = 'blue'
                  trackerArray.push(id)
                  
                 // console.log(trackerArray + currentPlayer)               
                  boxes.forEach( box => box.removeEventListener('click', selectRabbit))  
                  boxes.forEach( box => box.addEventListener('click', moveRabbit))
                  
                  //the code below disable some boxes to prevent the players from jumping boxes
                  //this is to make sure a player moves one square difference 
                  if ( id == 4 || id == 5 || id == 6) {
                      let q = [0,10]
                      for( let i = 0; i< q.length; i++) {
                          boxes[q[i]].removeEventListener('click', moveRabbit)
                      }
                  }
                  if ( id == 3 || id == 6 || id == 9) {
                      let q = [1,4,7]
                      for( let i = 0; i< q.length; i++) {
                          boxes[q[i]].removeEventListener('click', moveRabbit)
                      }
                  }
                  if ( id == 1 || id == 4 || id == 7) {
                      let q = [3,6,9]
                      for( let i = 0; i< q.length; i++) {
                          boxes[q[i]].removeEventListener('click', moveRabbit)
                      }
                  }
                  if ( id == 1 || id == 2 || id == 3) {
                      let q = [7,8,9,10]
                      for( let i = 0; i< q.length; i++) {
                          boxes[q[i]].removeEventListener('click', moveRabbit)
                      }
                  }
                  if ( id == 7 || id == 8 || id == 9) {
                      let q = [0,1,2,3]
                      for( let i = 0; i< q.length; i++) {
                          boxes[q[i]].removeEventListener('click', moveRabbit)
                      }
                  }
                  if ( id == 10) {
                      let q = [0,1,2,3,4,5,6]
                      for( let i = 0; i< q.length; i++) {
                          boxes[q[i]].removeEventListener('click', moveRabbit)
                      }
                  }
                  if ( id == 0) {
                      let q = [4,5,6,7,8,9,10]
                      for( let i = 0; i< q.length; i++) {
                          boxes[q[i]].removeEventListener('click', moveRabbit)
                      }
                  }
              }   
          }          
          
           function moveRabbit(event) {
           let id = event.target.id
               if (boxes[id].innerText !== currentPlayer && boxes[id].innerText !== dog && boxes[id].innerText !== rabbit ) {
                   boxes[id].innerText = currentPlayer
                   
                   boxes[parseFloat(trackerArray[1])].style.backgroundImage = "url('')"
                   boxes[parseFloat(trackerArray[1])].style.border = '2px solid brown'
                   boxes[parseFloat(trackerArray[1])].innerText = ''
                   trackerArray.pop()
                   
                   if (currentPlayer == rabbit) {
  
                       boxes[id].style.backgroundImage = rabbitBackgroundImage
                       currentPlayer = dog
                       currentPlayerImage = dogBackgroundImage
                   }else if(currentPlayer == dog){
                   
                       boxes[id].style.backgroundImage = dogBackgroundImage
                       currentPlayer = rabbit
                       currentPlayerImage = rabbitBackgroundImage
                   }
                   
                   displayPlayerTurn.innerHTML = `<h3>To play: ${currentPlayer}</h3> <h3>Time: </h3>`
                   boxes.forEach( box => box.addEventListener('click', selectRabbit))
                   boxes.forEach( box => box.removeEventListener('click', moveRabbit))  
                   
function checkWin() {   
    let winSpaces = [[7,8,9,10],
                     [1,2,3,0],
                     [4,5,2,1],
                     [2,5,6,3],
                     [4,5,8,7],
                     [5,6,8,9]
                    ]
    let [a,b,c,d,e,f] = winSpaces 
    
    //checking all boxes for a winning conditional function
    
    if (boxes[a[0]].innerText == dog && boxes[a[1]].innerText == dog 
                                     && boxes[a[2]].innerText == dog   
                                     && boxes[a[3]].innerText == rabbit) {
                                     
        displayPlayerTurn.innerHTML = `<h3>Rabbit died</h3> <h3>Time: </h3>`
    }
    if (boxes[b[0]].innerText == dog && boxes[b[1]].innerText == dog 
                                     && boxes[b[2]].innerText == dog   
                                     && boxes[b[3]].innerText == rabbit) {
                                     
        displayPlayerTurn.innerHTML = `<h3>Rabbit died</h3> <h3>Time: </h3>`
   }
   if (boxes[c[0]].innerText == dog && boxes[c[1]].innerText == dog 
                                    && boxes[c[2]].innerText == dog   
                                    && boxes[c[3]].innerText == rabbit) {
                                     
        displayPlayerTurn.innerHTML = `<h3>Rabbit died</h3> <h3>Time: </h3>`
   }       
   if (boxes[d[0]].innerText == dog && boxes[d[1]].innerText == dog 
                                    && boxes[d[2]].innerText == dog   
                                    && boxes[d[3]].innerText == rabbit) {
                                     
        displayPlayerTurn.innerHTML = `<h3>Rabbit died</h3> <h3>Time: </h3>`
   }       
   if (boxes[e[0]].innerText == dog && boxes[e[1]].innerText == dog 
                                    && boxes[e[2]].innerText == dog   
                                    && boxes[e[3]].innerText == rabbit) {
                                     
        displayPlayerTurn.innerHTML = `<h3>Rabbit died</h3> <h3>Time: </h3>`
   }
   if (boxes[f[0]].innerText == dog && boxes[f[1]].innerText == dog 
                                    && boxes[f[2]].innerText == dog   
                                    && boxes[f[3]].innerText == rabbit) {
                                     
        displayPlayerTurn.innerHTML = `<h3>Rabbit died</h3> <h3>Time: </h3>`
   }                   
             
}
checkWin()
                                                                    
               }   
           }
       
}


