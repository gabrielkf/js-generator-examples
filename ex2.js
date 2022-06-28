/**
 * Generators are also iterABLEs
 */

function* abcs() {
  yield 'a';
  yield 'b';
  yield 'c';
}

for (let letter of abcs()) {
  console.log(letter.toUpperCase());
}

console.log([...abcs()]);
