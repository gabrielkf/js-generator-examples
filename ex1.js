/**
 * Generator functions are a type of iterator
 *
 * It means they have a next() method, which returns
 * {
 *    value: "something",
 *    done: false
 * }
 */

function* genFunction() {
  yield "I'm a generator function";

  console.log('... [from generator]');
  yield 'Nice to meet you';

  console.log('... ... [from generator]');
  return "I'm done, goodbye";
}

let genObject = genFunction();

console.log(genObject.next());
console.log('# Hi');

console.log(genObject.next());
console.log("# I'm developer, nice to meet you");

console.log(genObject.next());
console.log('# Cool');

console.log(genObject.next());
