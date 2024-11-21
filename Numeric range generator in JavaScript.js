const range = function* (end) {
  for (let i = 0; i < end; i++) yield i;
};

for (let i of range(5)) console.log(i);
// Logs: 0, 1, 2, 3, 4
