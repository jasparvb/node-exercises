$(function() {
  let baseURL = "https://deckofcardsapi.com/api/deck"
  //Get one card from new deck
  async function getOneCard() {
    let data = await $.getJSON(`${baseURL}/new/draw/?count=1`);
    console.log(`${data.cards[0].value} of ${data.cards[0].suit}`);
  }
  getOneCard();
    
  //Get two cards from new deck
  async function getTwoCards() {
    let data = await $.getJSON(`${baseURL}/new/draw/?count=1`);
    let data2 = await $.getJSON(`${baseURL}/${data.deck_id}/draw/?count=1`);
    console.log(`${data.cards[0].value} of ${data.cards[0].suit}`);
    console.log(`${data2.cards[0].value} of ${data2.cards[0].suit}`);
  }
  getTwoCards();

  //Draw card and display on page
  let deckId = null;
  async function drawCards() {
    if (deckId === null) {
      let deck = await $.getJSON(`${baseURL}/new/shuffle/`);
      deckId = deck.deck_id;
    }
      
    let data = await $.getJSON(`${baseURL}/${deckId}/draw/?count=1`);
    $('#card-area').append(`<img src="${data.cards[0].image}">`);
    if(data.remaining === 0) {
      $('button').hide();
    }
  }

  $('button').on('click', drawCards);
});