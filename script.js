// Example Quiz Data
const quizQuestions = [
  {
    question: "Which of these is a JavaScript framework?",
    type: "single",
    options: [
      "React",
      "Laravel",
      "Django",
      "Flask"
    ],
    answer: [0]
  },
  {
    question: "Select all prime numbers below:",
    type: "multi",
    options: [
      "2", "3", "4", "5"
    ],
    answer: [0, 1, 3]
  },
  {
    question: "Fill in the blank: CSS stands for ____ Style Sheets.",
    type: "text",
    answer: ["Cascading"]
  }
];

// Quiz State
let currentQuestion = 0;
let userAnswers = [];

const quizBox = document.getElementById('quiz-box');

function renderQuestion() {
  const q = quizQuestions[currentQuestion];
  let html = `<div class="quiz-question">${q.question}</div><form id="quiz-form">`;

  if (q.type === "single") {
    html += `<ul class="quiz-options">`;
    q.options.forEach((opt, idx) => {
      html += `
        <li>
          <label>
            <input type="radio" name="option" value="${idx}" required>
            ${opt}
          </label>
        </li>
      `;
    });
    html += `</ul>`;
  } else if (q.type === "multi") {
    html += `<ul class="quiz-options">`;
    q.options.forEach((opt, idx) => {
      html += `
        <li>
          <label>
            <input type="checkbox" name="option" value="${idx}">
            ${opt}
          </label>
        </li>
      `;
    });
    html += `</ul>`;
  } else if (q.type === "text") {
    html += `<input type="text" name="text-answer" placeholder="Your answer..." style="font-size:1.1rem; padding:8px 14px; border-radius:7px; border:1px solid #f9a1bc; width:60%;" required>`;
  }

  html += `<button class="quiz-btn" type="submit">Next</button></form>`;
  quizBox.innerHTML = html;

  document.getElementById('quiz-form').onsubmit = function(e) {
    e.preventDefault();
    if (q.type === "single") {
      const ans = Number(document.querySelector('input[name="option"]:checked').value);
      userAnswers.push([ans]);
    } else if (q.type === "multi") {
      const ans = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(el=>Number(el.value));
      userAnswers.push(ans);
    } else if (q.type === "text") {
      const ans = document.querySelector('input[name="text-answer"]').value.trim();
      userAnswers.push(ans);
    }
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }
}

function showResult() {
  let score = 0;
  quizQuestions.forEach((q, idx) => {
    if (q.type === "single" || q.type === "multi") {
      if (JSON.stringify(q.answer) === JSON.stringify(userAnswers[idx].sort())) {
        score++;
      }
    } else if (q.type === "text") {
      if (userAnswers[idx].toLowerCase() === q.answer[0].toLowerCase()) {
        score++;
      }
    }
  });

  quizBox.innerHTML = `
    <div class="quiz-result">Your Score: ${score} / ${quizQuestions.length}</div>
    <button class="quiz-btn" onclick="restartQuiz()">Restart Quiz</button>
  `;
}

window.restartQuiz = function() {
  currentQuestion = 0;
  userAnswers = [];
  renderQuestion();
};

renderQuestion();