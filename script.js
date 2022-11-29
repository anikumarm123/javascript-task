var startBtn = document.querySelector(".start");
var resetBtn = document.querySelector(".reset");
var displayPlayer = document.querySelector(".player-change");
var line = document.getElementById("line-strick");
var gameBoard = document.querySelectorAll(".cells");

startBtn.addEventListener("click", gameStart);
resetBtn.addEventListener("click", gameReset);

var matchDrow = []
var xIndex = [];
var oIndex = [];
var clickIndex = [];
var winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
var lineClass = ['r-1','r-2','r-3','c-1','c-2','c-3','d-1','d-2']


function gameStart() {

  var playerChange = "player-1";

  displayPlayer.textContent = "X ' Turn";
   
  gameBoard.forEach(function (cell) {
    cell.addEventListener("click", function fun(data) {
      var key = parseInt(data.target.getAttribute("key"));

      var check = clickIndex.includes(key);

      if (!check) {
        clickIndex.push(key);
          
        matchDrow.push(key)
        
        if (playerChange == "player-1") {
          displayPlayer.textContent = "O' Turn";
          playerChange = "player-2";
          data.target.textContent = "X";
          xIndex.push(key);

          winningCombo.forEach(function (arry) {
            let count = 0;

            arry.forEach(function (value) {
              if (xIndex.indexOf(value) > -1) {
                count++;
              }
            });

            if (count == 3) {
              displayPlayer.textContent = "X Is Win"

              gameBoard.forEach(function(getkey){

                key = parseInt(getkey.getAttribute('key'))
                clickIndex.push(key)
                
              })
              var strickIndex = parseInt(winningCombo.indexOf(arry))  
                
              var classname = lineClass.at(strickIndex)

              line.className = classname
              
            }
          });
        } 
        else {
          displayPlayer.textContent = "X' Turn";
          playerChange = "player-1";
          data.target.textContent = "O";
          oIndex.push(key);
          winningCombo.forEach(function (arry) {
            let count = 0;
            arry.forEach(function (value) {
              if (oIndex.indexOf(value) > -1) {
                count++;
              }
            });

            if (count == 3) {
              
               displayPlayer.textContent = "O' Is Win"
              gameBoard.forEach(function(getkey){
                
                key = parseInt(getkey.getAttribute('key'))
                clickIndex.push(key)
                
              })
              var strickIndex = parseInt(winningCombo.indexOf(arry))  
                
              var classname = lineClass.at(strickIndex)
              
              line.className = classname
          
            }
          });
        }
        if(matchDrow.length == 9){
          displayPlayer.textContent = "Game Over";
         console.log(matchDrow);
         
       }
      }
    });
  });

}

function gameReset() {
   gameBoard.forEach(function(cell){
     cell.textContent = "";
   })
  displayPlayer.innerHTML = "";
  clickIndex = []
  xIndex = []
  oIndex = []
  line.className= ""
  matchDrow =[]
}

