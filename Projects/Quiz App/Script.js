const questions = [
{
question: "What does HTML stand for?",
options: [
"Hyper Text Markup Language",
"Home Tool Markup",
"Hyperlinks"
],
answer: 0
},

{
question: "Which language is used for styling?",
options: ["HTML", "CSS", "Python" , "JavaScript"],
answer: 1
},

{
question: "Which is a JavaScript framework?",
options: ["React", "Django", "Java"],
answer: 0
}
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let interval;

// Load Question
function showQuestion() {

clearInterval(interval);

// Quiz End
if (currentQuestion >= questions.length) {


document.querySelector(".quiz-box").innerHTML = `
  <h2>Quiz Finished</h2>
  <h3>Score: ${score}/${questions.length}</h3>
`;

return;

}

// Reset Timer
timeLeft = 10;

document.getElementById("timer").textContent =
"Time: " + timeLeft;

// Start Timer
interval = setInterval(() => {

timeLeft--;

document.getElementById("timer").textContent =
  "Time: " + timeLeft;

if (timeLeft === 0) {
  currentQuestion++;
  showQuestion();
}


}, 1000);

// Get Current Question
let q = questions[currentQuestion];

// Show Question
document.getElementById("question").textContent =
q.question;

// Show Options
let buttons = "";

q.options.forEach((option, index) => {

buttons += `
  <button onclick="checkAnswer(${index})">
    ${option}
  </button>
`;

});

document.getElementById("answers").innerHTML = buttons;
}

// Check Answer
function checkAnswer(index) {

if (index === questions[currentQuestion].answer) {
score++;
}

currentQuestion++;

showQuestion();
}

// Start Quiz
showQuestion();
