const questions = [
  {
    q: "What’s my favorite thing about you?",
    a: "smile",
    m: "Your smile makes my worst days better."
  },
  {
    q: "Where did we first talk?",
    a: "chat",
    m: "That moment changed everything for me."
  },
  {
    q: "Do I love you?",
    a: "yes",
    m: "More than words can explain."
  }
];

let index = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const messageBox = document.getElementById("message");
const gameBox = document.getElementById("game");
const loveMessage = document.getElementById("loveMessage");
const finalBox = document.getElementById("final");

questionEl.textContent = questions[index].q;
