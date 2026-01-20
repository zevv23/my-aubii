const questions = [
  {
    q: "47 * 170?",
    choices: ["7990", "8000", "8010"],
    a: "7990",
    m: "di ka nag calcu noh HAHAHAHAH"
  },
  {
    q: "Oh eto next question, anong favorite food ko?",
    choices: ["wala", "sinigang", "ikaw WHAHAHAHA"],
    a: "sinigang",
    m: "ang freaky nung isa sa choices"
  },
  {
    q: "Do I love you?",
    choices: ["Yes", "Maybe", "No"],
    a: "Yes",
    m: "I love you so much babyy <3"
  }
];

let index = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const messageBox = document.getElementById("message");
const gameBox = document.getElementById("game");
const loveMessage = document.getElementById("loveMessage");
const finalBox = document.getElementById("final");

function loadQuestion() {
  questionEl.textContent = questions[index].q;
  choicesEl.innerHTML = "";
  feedbackEl.textContent = "";

  questions[index].choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(choice);
    choicesEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[index].a) {
    gameBox.classList.add("hidden");
    messageBox.classList.remove("hidden");
    loveMessage.textContent = questions[index].m;
  } else {
    feedbackEl.textContent = "Try again babyy";
  }
}

function nextQuestion() {
  index++;

  if (index < questions.length) {
    messageBox.classList.add("hidden");
    gameBox.classList.remove("hidden");
    loadQuestion();
  } else {
    messageBox.classList.add("hidden");
    finalBox.classList.remove("hidden");
  }
}

loadQuestion();
