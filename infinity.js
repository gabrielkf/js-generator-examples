function* infinityAndBeyond() {
  let i = 1;

  while (true) {
    yield i++;
  }
}

function* take(n, iterable) {
  for (let item of iterable) {
    if (n-- <= 0) return;

    yield item;
  }
}

console.log([...take(5, infinityAndBeyond())]);

function* map(iterable, mapFn) {
  for (let item of iterable) {
    yield mapFn(item);
  }
}

console.log([
  ...take(
    9,
    map(infinityAndBeyond(), x => x * x)
  ),
]);
