let favNum = 7;
let baseURL = "http://numbersapi.com";

//Part 1
axios.get(`${baseURL}/${favNum}?json`)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(`Oops, there was a problem :( ${err}`);
  });

//Part 2
let favNums = [2, 4, 6];
$.getJSON(`${baseURL}/${favNums}?json`)
  .then(data => {
    for(num in data) {
      $('body').append(`<p>${data[num]}</p>`);
    }
  })
  .catch(err => {
    console.log(`Oops, there was a problem :( ${err}`);
  });

//Part 3
let fourFacts = [];
for(let i = 0; i < 4; i++) {
  fourFacts.push(axios.get(`${baseURL}/${favNum}?json`));
}
Promise.all(fourFacts).then(facts => {
  facts.forEach(fact => $('body').append(`<p>${fact.data}</p>`));
});
