//Example of callback hell


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)\n', (name) => {
rl.question('What\'s an activity you like doing?\n', (activity) => {
rl.question('What do you listen to while doing that?\n', (song) => {
rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\n', (meal) => {
rl.question('What\'s your favourite thing to eat for that meal\n', (food) => {
    console.log(`Hi! My name is ${name}, I like ${activity} while I listen to ${song}. Do you want to join me for ${meal} and eat ${food}?`)
    rl.close();
})})})})});
