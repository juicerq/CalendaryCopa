const cards = document.querySelector('#cards')

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