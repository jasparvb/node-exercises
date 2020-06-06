$(function() {

//Get one card from new deck
$.getJSON("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
  .then(data => {
    console.log(data.cards[0].value, ' of ', data.cards[0].suit)
  });
  
//Get two cards from new deck
let card1 = '';
$.getJSON("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
  .then(data => {
    card1 = `${data.cards[0].value} of ${data.cards[0].suit}`
    return $.getJSON(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`)
  })
  .then(data => {
    let card2 = `${data.cards[0].value} of ${data.cards[0].suit}`
    console.log(card1);
    console.log(card2);
  });

//Draw card and display on page

});