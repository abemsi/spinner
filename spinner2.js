let delay = 0;
let string = "|/-\\|/-\\|";

for (const char of string) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '   ');
  }, delay);
  delay += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, delay += 200);