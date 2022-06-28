const players = {};
const queue = [];

function send(name, msg) {
  console.log(msg);
  queue.push([name, msg]);
}

function run() {
  while (queue.length) {
    const [name, msg] = queue.shift();
    players[name].next(msg);
  }

  console.log('End of Queue');
}

function* knocker() {
  send('asker', 'knock knock');

  let question = yield;
  if (question !== "who's there?") return;

  send('asker', 'gene');

  question = yield;
  if (question !== 'gene who?') return;

  send('asker', 'generator!');
}

function* asker() {
  let knock = yield;
  if (knock !== 'knock knock') return;

  send('knocker', "who's there?");

  let answer = yield;
  send('knocker', `${answer} who?`);
}

players.knocker = knocker();
players.asker = asker();

send('asker', 'asker get ready...');
send('knocker', 'knocker, wake up!');
run();
