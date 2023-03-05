// Do you know me? Quiz. Use everything learnt. Keep score.

var readlineSync = require("readline-sync");
var chalk = require('chalk')

var score = 0

var highScore = [{
  name: "Pika",
  score: 7
}, {
  name: "Jojo",
  score: 7
}]

var quiz = [{
  question: "Where is the Slytherin common room located in the castle?\n a) In the dorms\n b) In the East Wing\n c) The Dungeons\n",
  answer: "c"
}, {
  question: "Who ended up giving Harry permission to go to Hogsmeade?\n a) Dumbledore\n b) Sirius Black\n c) Minerva McGonagall\n",
  answer: "b"
}, {
  question: "Who’s party did Harry, Ron, and Hermione go to in The Chamber of Secrets?\n a) Dobby\n b) Nearly Headless Nick\n c) Draco Malfoy\n",
  answer: "b"
}, {
  question: "What patronus does Luna Lovegood have?\n a) Hare\n b) Lion\n c) Stag\n ",
  answer: "a"
}, {
  question: "Who was the quidditch commentator in Harry’s first years at Hogwarts?\n a) Angelina Johnson\n b) Dean Thomas\n c) Lee Jordan\n",
  answer: "c"
}, {
  question: "What organization did Hermione start in her 4th year?\n a) Dumbledore’s Army\n b) Wizards Against to the Dark Arts\n c) Society for the Promotion of Elfish Welfare\n",
  answer: "c"
}, {
  question: "What is the name of the bridge that the Death eaters wreaked havoc on?\n a) The Linsdale Bridge\n b) The Brockdale Bridge\n c) The Ha’penny Bridge\n",
  answer: "b"
}]

var quizLen = quiz.length
console.log(chalk.blueBright.inverse("Potterheads, Take This Book Quiz!\n\n"))

var welcome = readlineSync.question("Enter name, Potterhead!: ")
console.log(chalk.yellow("Welcome " + welcome.toUpperCase() + "!\n") + ("There'll be " + quizLen + " questions. Lets see how well you know the Potterverse!\n"))

var begin = readlineSync.question("Press e to exit, enter to continue....")
if (begin === "e") {
  rl.close();
}
else {
  console.log("Lets start\n")
}

for (var i = 0; i < quizLen; i++) {
  var userAnswer = readlineSync.question(quiz[i].question)
  if (userAnswer === quiz[i].answer) {
    score = score + 1
    console.log(chalk.green("Thats correct!"))
  }
  else {
    console.log(chalk.red("Sorry.Correct ans is " + quiz[i].answer))
  }
  console.log(chalk.yellowBright("Score " + score))
  console.log("----------")
}
console.log(chalk.yellowBright("Final score is " + score))

console.log("Check out the high scores: " + chalk.cyan(highScore[0].name + ":" + highScore[0].score + "    " + highScore[1].name + ":" + highScore[1].score))

if (score === highScore[0].score) {
  console.log("Congratulations on the new high score!")
}
else if (score === highScore[1].score) {
  console.log("Congratulations on the 2nd highest score!")
}
console.log(chalk.redBright("thanks for playing...."))