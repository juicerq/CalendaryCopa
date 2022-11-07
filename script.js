function createGame(player1, hour, player2){
  return `
    <li>
      <img src="/assets/icon-${player1}.svg" alt="icon ${player1}">
      <strong>${hour}</strong>
      <img src="/assets/icon-${player2}.svg" alt="icon ${player2}">
    </li>`
}

function createCard(date, day, game){
  return `
  <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${game}
        </ul>
      </div>`
}

document.querySelector("#cards").innerHTML = `
${createCard('24/11', 'quinta', createGame('brazil', '18:00', 'serbia'))}
${createCard('28/11', 'segunda', createGame('serbia', '02:00', 'brazil'))}`