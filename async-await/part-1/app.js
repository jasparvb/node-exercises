let favNum = 22;
let baseURL = "http://numbersapi.com";

//Part 1
async function part1() {
  let data = await axios.get(`${baseURL}/${favNum}?json`);
  console.log(data);
}
part1();

//Part 2
let favNums = [2, 4, 6];
async function part2() {
  let data = await $.getJSON(`${baseURL}/${favNums}?json`)
    for(num in data) {
      $('body').append(`<p>${data[num]}</p>`);
    }
}
part2();

//Part 3
async function part3() {
  let fourFacts = [];
  for(let i = 0; i < 4; i++) {
    fourFacts.push(axios.get(`${baseURL}/${favNum}?json`));
  }
  let facts = await Promise.all(fourFacts)
  facts.forEach(fact => $('body').append(`<p>${fact.data}</p>`));
  }
part3();
