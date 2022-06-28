/**
 * Generator functions are a type of iterable
 *
 * It means they have a next() method, which returns
 * {
 *    value: "something",
 *    done: false
 * }
 */

function* genFunction() {
  yield "I'm a generator function";
}

let genObject = genFunction();

console.log(genObject.next());
console.log(genObject.next());
