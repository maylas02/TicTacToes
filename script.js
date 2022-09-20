let boxes = document.querySelectorAll('#box')
let turn = document.querySelector('#turn')
let previous = document.querySelector('#prev')
let next = document.querySelector('#next')
let historyBtn = document.querySelector('#gameHistory')
let restartBtn = document.querySelector('#restart')
let currentPlayer
// let inGame = true
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let history = []

let currentIndex = 0

startGame()

function startGame() {
    boxes.forEach((box, index) => {
        box.addEventListener('click',boxClick, {once:true})
        restartBtn.addEventListener('click', startGame)

        function boxClick() {
            if(currentPlayer) {
                currentPlayer = false
                box.innerHTML = '<i class="fa-solid fa-xmark"></i>'
                turn.innerText = "Player O's turn"
                history.push(index)
                board[[index]] = box.innerHTML
                currentIndex++
            } else {
                currentPlayer = true
                box.innerHTML = '<i class="fa-solid fa-o"></i>'
                turn.innerText = "Player X's turn"
                history.push(index)
                board[[index]] = box.innerHTML
                currentIndex++
            }
            // console.log(index)
            // console.log(history)
            //console.log(board)
            //console.log(currentIndex + ' click' + ' in index', index)
            //console.log(history.length)
        }

        function restartGame() {
            box.innerHTML = ''
            turn.innerText = "Player X's turn"
            currentPlayer = true
            history.pop(index)
        }
        restartGame()

        function checkWinner() {
            
        }

      
        
              
    })
}


function undo() {
    // // boxes.forEach((box, index) => {
    // //     let lastItem = board[history.length - 1]
    // //     box.innerHTML[board] = boxes
    // // })
    // board = history.length--
    // box.innerHTML = board--
    // console.log(board)

    // if(history.length === 1) {
    //     //box.disabled = true
    //     previous.removeEventListener('click',undo)
    // }
    let lastItem = board[board.length - 1]
    boxes.forEach((box, index) => {
        box.innerHTML = lastItem
        console.log(box,index)
    })
  
}
previous.addEventListener('click',undo)

function redo() {
    // board = history.length++
    // box.innerHTML = board++
    // console.log(board)

    // if(history.length === 1) {
    //     //box.disabled = true
    //     next.removeEventListener('click',redo)
    // }
}
next.addEventListener('click', redo) 












// boxes.forEach((box, index) => {
//     box.addEventListener('click', clicked, { once : true })

//     function clicked() {

//         if (currentPlayer) {
//             currentPlayer = false
//             box.innerHTML = '<i class="fa-solid fa-xmark"></i>'
//             turn.innerText = "Player O's turn"
//             history.push(index)
//         }   else {
//             currentPlayer = true
//             box.innerHTML = '<i class="fa-solid fa-o"></i>'
//             turn.innerText = "Player X's turn"
//             history.push(index)
//         }

//         console.log('clicked')
//         console.log(index)
//         console.log(history)
//         winner()
//     }

//     function winner() {
//         for (let i = 0; i < winningCombinations.length; i++) {
//             // let board = winningCombinations[i]
//             let index1 = winningCombinations[i][0]
//             let index2 = winningCombinations[i][1]
//             let index3 = winningCombinations[i][2]
            
//             // if(board === index1 && board === index2 && board === index3) {
//             //     console.log('winner')
//             // } else if (board !== index1 && board !== index2 && board !== index3) {
//             //     console.log ('none')
//             // }   else {
//             //     console.log('tie')
//             // }

//             console.log(index1)
//         }
//     }

//     function restartGame() {
//         boxes.forEach(box => {
//             box.innerHTML = ''
//         })
//     }

//     restartBtn.addEventListener('click', restartGame)

   
//     // function gameHistory() {
        
//     // }

//     // function undo() {
//     //     previous.addEventListener('onclick',() => {
//     //         if(box === history.length) {
//     //             history--
//     //         }
//     //     })
//     // }

//     // function redo() {
//     //     next.addEventListener('onclick',() => {
//     //         if(box === history.length) {
//     //             history++

//     //         }
//     //     })
//     // }
// })

