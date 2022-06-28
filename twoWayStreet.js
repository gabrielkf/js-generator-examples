function* listener() {
  console.log('listening...');

  while (true) {
    let msg = yield;

    console.log(`heard: ${msg}`);
  }
}

let l = listener();

l.next('hello'); // gets to the yield statement, but does not print
l.next('blabla');
l.next('hello again');
