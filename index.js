// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

destructivelyAppendCat("Ralph");

console.log(cats);
//second assignment

function destructivelyPrependCat(name) {
  cats.unshift(name);
}
destructivelyPrependCat("Bob");
console.log(cats);
// //third test
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
destructivelyRemoveLastCat("Garfiled");
console.log(cats);

function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}
destructivelyRemoveFirstCat("Milo");
console.log(cats);

function appendCat(name) {
  return [...cats, name];
}
appendCat("Broom");
console.log(cats);

function prependCat(name) {
  return [name, ...cats];
}
prependCat("Arnold");
console.log(cats);

function removeLastCat() {
  return cats.slice(0, -1);
}
const result = removeLastCat();
console.log(result);

function removeFirstCat() {
  return cats.slice(1);
}
const myResult = removeFirstCat();
console.log(result);
