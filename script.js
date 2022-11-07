const date = Number(document.getElementById('date').value)
const day = String(document.getElementById('day').value)

const cards = document.querySelector('#cards')

const player1 = document.querySelector('#player1').value
const hour = document.querySelector('#hour').value
const player2 = document.querySelector('#player2').value

// function createGame(player1, hour, player2){
//   return `
//     <li>
//       <img src="/assets/icon-${player1}.svg" alt="icon ${player1}">
//       <strong>${hour}</strong>
//       <img src="/assets/icon-${player2}.svg" alt="icon ${player2}">
//     </li>`
// }

// function createCard(){
//   return `
//   <div class="card">
//         <h2>${date} <span>${day}</span></h2>
//         <ul>
//           ${game}
//         </ul>
//       </div>`
// }

// document.querySelector("#cards").innerHTML = `
// ${createCard('24/11', 'quinta', createGame('brazil', '18:00', 'serbia'))}
// ${createCard('28/11', 'segunda', createGame('serbia', '02:00', 'brazil'))}`]

function createCard(){
  cards.innerHTML += `
  <div class="card">
    <h2>${document.getElementById('date').value} <span>${document.getElementById('day').value}</span></h2>
      <ul>
         <li>
          <img src="/assets/icon-${document.querySelector('#player1').value}.svg" alt="icon ${document.querySelector('#player1').value}">
          <strong>${document.querySelector('#hour').value}</strong>
          <img src="/assets/icon-${document.querySelector('#player2').value}.svg" alt="icon ${document.querySelector('#player2'.value)}">
        </li>
      </ul>
  </div>`
}