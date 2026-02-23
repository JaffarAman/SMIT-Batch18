var quizQuestions = [
    {
        id: 1,
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "Hyper Text Programming Language",
            "Hyper Text Styling Language",
            "Hyper Text Scripting Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "a",
            "link",
            "href",
            "hyperlink"
        ],
        answer: "a"
    },
    {
        id: 3,
        question: "Which CSS property is used to change the text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: "color"
    },
    {
        id: 4,
        question: "Which CSS property controls the size of text?",
        options: [
            "text-style",
            "font-size",
            "text-size",
            "font-style"
        ],
        answer: "font-size"
    },
    {
        id: 5,
        question: "Inside which HTML element do we put JavaScript?",
        options: [
            "<javascript>",
            "<js>",
            "<script>",
            "<code>"
        ],
        answer: "<script>"
    },
    {
        id: 6,
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "//",
            "/* */",
            "#",
            "<!-- -->"
        ],
        answer: "//"
    },
    {
        id: 7,
        question: "Which JavaScript keyword is used to declare a variable?",
        options: [
            "var",
            "int",
            "string",
            "declare"
        ],
        answer: "var"
    },
    {
        id: 8,
        question: "Which CSS property is used to make a website responsive?",
        options: [
            "flex",
            "media-query",
            "@media",
            "responsive"
        ],
        answer: "@media"
    },
    {
        id: 9,
        question: "Which method is used to select an element by its ID in JavaScript?",
        options: [
            "getElementByClass()",
            "getElementById()",
            "querySelectorAll()",
            "selectById()"
        ],
        answer: "getElementById()"
    },
    {
        id: 10,
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "class",
            "styles",
            "style",
            "font"
        ],
        answer: "style"
    }
];



var questionElement = document.getElementById("questionElement")
var optionELement = document.getElementById("optionELement")

var counter = 0


function startQuiz() {

    var question = quizQuestions[counter].question
    var options = quizQuestions[counter].options
    questionElement.innerHTML = question

    optionELement.innerHTML = ""
    for (var i = 0; i < options.length; i++) {
        var li = `<li onclick="checkAns(this)" >${options[i]}</li>`
        optionELement.innerHTML += li
    }


}


function nextQuestion() {
    counter++

    console.log("nextQuestion", counter)
    if (counter < quizQuestions.length) {
        startQuiz()
    } else {
        console.log("quiz khatam tata")
    }

}

function checkAns(li) {
    var correctAns = quizQuestions[counter].answer
    var userAns = li.innerHTML
    // console.log("correctAns", correctAns)
    // console.log("userAns", userAns)

    // console.log(userAns === correctAns)
    if(userAns === correctAns){
        console.log("true answer")
    }   else{
        console.log("galat jawab")
    }
}