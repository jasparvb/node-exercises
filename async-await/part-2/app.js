$(function() {
  let baseURL = "https://deckofcardsapi.com/api/deck"
  //Get one card from new deck
  $.getJSON(`${baseURL}/new/draw/?count=1`)
    .then(data => {
      console.log(data.cards[0].value, ' of ', data.cards[0].suit)
    });
    
  //Get two cards from new deck
  let card1 = '';
  $.getJSON(`${baseURL}/new/draw/?count=1`)
    .then(data => {
      card1 = `${data.cards[0].value} of ${data.cards[0].suit}`
      return $.getJSON(`${baseURL}/${data.deck_id}/draw/?count=1`)
    })
    .then(data => {
      let card2 = `${data.cards[0].value} of ${data.cards[0].suit}`
      console.log(card1);
      console.log(card2);
    });

  //Draw card and display on page
  let deckId = null;
  $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    deckId = data.deck_id;
  });

  $('button').on('click', function() {
    $.getJSON(`${baseURL}/${deckId}/draw/?count=1`)
      .then(data => {
        $('#card-area').append(`<img src="${data.cards[0].image}">`);
        if(data.remaining === 0) {
          $('button').hide();
        }
      })
  });
});