console.log("Welcome to this Physics Quiz");

// variables initialization
let question = document.querySelector(".question");
let o1 = document.querySelector(".o1");
let o2 = document.querySelector(".o2");
let o3 = document.querySelector(".o3");
let o4 = document.querySelector(".o4");
let submit = document.querySelector(".submit");
let answer;
let score = 0;

// object for questions
let questionSet = [
  {
    question: "What is the SI unit of force?",
    option1: "Newton",
    option2: "meter",
    option3: "dyne",
    option4: "joule",
    answer: "a1",
  },

  {
    question: "What is the charge on an electron?",
    option1: "-1",
    option2: "+1",
    option3: "0",
    option4: "+2",
    answer: "a2",
  },

  {
    question: "Choose the correct one.",
    option1: "F = mv",
    option2: "F = m/a",
    option3: "F = a^2",
    option4: "F = ma",
    answer: "a4",
  },

  {
    question: "What is the value of 'g'?",
    option1: "50 m/s^2",
    option2: "1 m/s^2",
    option3: "5 m/s^2",
    option4: "9.8 m/s^2",
    answer: "a4",
  },

  {
    question: "What is the stament of Ohm's law at constant temperature?",
    option1: "Voltage is inversely proportional to electric charge",
    option2: "Voltage is directly proportional to electric charge",
    option3: "Voltage is equal to electric charge",
    option4: "all of these",
    answer: "a2",
  },
];

// dispalying questions
let questionCount = 0;
const displayQuestion = () => {
  question.innerText = questionSet[questionCount].question;
  o1.innerHTML = questionSet[questionCount].option1;
  o2.innerText = questionSet[questionCount].option2;
  o3.innerText = questionSet[questionCount].option3;
  o4.innerText = questionSet[questionCount].option4;
  console.log(questionCount);
};

displayQuestion();

// question.innerText = questionSet[0].question;
// o1.innerHTML = questionSet[0].option1;
// o2.innerText = questionSet[0].option2;
// o3.innerText = questionSet[0].option3;
// o4.innerText = questionSet[0].option4;
// questionCount++;

submit.addEventListener("click", (event) => {
  if (questionCount <= questionSet.length) {
    questionCount++;
    displayQuestion();
  }
  if (questionCount == questionSet.length) {
    console.log(displayScore());
  }
  removeCheck();
});

// removing the default radio check after submit
const removeCheck = () => {
  document.querySelectorAll(".uncheck").forEach((i) => {
    i.checked = false;
  });
};

// dispalyScore() function
const getAnswer = () => {
  document.querySelectorAll(".uncheck").forEach((i) => {
    if (i.checked) {
      answer = i.id;
    }
  });
  return answer;
};

// increasing score on correct answer
submit.addEventListener("click", () => {
  if (getAnswer() == questionSet[questionCount].answer) {
    score++;
  }
});

// displaying score
const displayScore = () => {
  return score;
};
