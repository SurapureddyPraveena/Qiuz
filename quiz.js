const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScrpit",
        a: "<js>",
        b: "<scripting>",
        c: "<javascript>",
        d: "<script>",
        correct: "d",
    },
    {
        question: "Where is the correct place to insert a JavaScript",
        a: "The <head> section",
        b: "The <body> section",
        c: "Neither a nor b",
        d: "Both a and b",
        correct: "d",
    },
    {
        question: "What is the correct syntax for referring to an external scrpit called xxx.js",
        a: '<scrpit href="xxx.js>"' ,
        b: '<scrpit name="xxx.js>"',
        c: '<scrpit src="xxx.js>"',
        d: '<scrpit id="xxx.js>"',
        correct: "c",
    },
    {
        question: "Which of the following is not a reserved word in JavaScript",
        a: "interface",
        b: "throws",
        c: "program",
        d: "short",
        correct: "c",
    },
    {
        question: "The external JavaScrpit file must contain the <script> tag",
        a: "True",
        b: "False",
        c: "Maybe",
        d: "none of the above",
        correct: "b",
    },{
        question: "JavaScript is a _____-side programming language",
        a: "Client",
        b: "Server",
        c: "Both",
        d: "none",
        correct: "c",
    },{
        question: "How do you find the minimum of x and y using JavaScript",
        a: "min(x, y)",
        b: "Math.min(x, y)",
        c: "Math.min(xy)",
        d: "min(xy)",
        correct: "b",
    },{
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        a: "catch",
        b: "lable",
        c: "try",
        d: "default",
        correct: "d",
    },{
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        a: "if(x 2)",
        b: "if(x=2)",
        c: "if(x==2)",
        d: "if(x!=2)",
        correct: "c",
    },{
        question: "What will the code return? /n Boolean(3 < 7)",
        a: "True",
        b: "False",
        c: "Nan",
        d: "Syntax error",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});