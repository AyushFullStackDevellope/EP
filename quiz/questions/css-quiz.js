let cssQuestionsArray = [];

function createQuestion(question, a, b, c, d, answer) {
  let object = {
    question: question,
    optionA: a,
    optionB: b,
    optionC: c,
    optionD: d,
    answer: answer,
  };
  cssQuestionsArray.push(object);
}

function addFirstFiveQuestion() {
  //FIrst Question
  createQuestion(
    "CSS HTML stands for?",
    "A) Hyper Text Marking Language",
    "B) Hypen Text Markup Language",
    "C) Hyper Text Markup Language",
    "D) Hyperlinks and Text Markup Language",
    3
  );
  //Second Question
  createQuestion(
    "CSS What is the correct HTML element for inserting a line break?",
    "A) lb",
    "B) break",
    "C) br",
    "D) linebreak",
    3
  );

  //Third Question
  createQuestion(
    "CSS What is the correct HTML element for inserting a horizontal rule?",
    "A) hr",
    "B) line",
    "C) rule",
    "D) hline",
    1
  );
}

function setCSSQuestions() {
  addFirstFiveQuestion();

  return cssQuestionsArray;
}

export { setCSSQuestions };
