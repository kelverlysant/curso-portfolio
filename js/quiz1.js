const quizQuestions = [
    {
        question: "O que significa HTML?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "HighText Machine Language"],
        repost: "HyperText Markup Language"
    },
    {
        question: "Qual destes é usado para estilizar páginas da web?",
        options: ["Python", "HTML", "CSS", "SQL"],
        repost: "CSS"
    },
    {
        question: "Qual destas opções declara uma variável em JavaScript?",
        options: ["Var", "Let", "Const", "Todas as anteriores"],
        repost: "Todas as anteriores"
    },
    {
        question: "O que significa CSS?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Cascading Simple Sheets"],
        repost: "Cascading Style Sheets"
    },
    {
        question: "Qual tag é usada para criar um link em HTML?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        repost: "<a>"
    },
    {
        question: "Qual das seguintes opções é usada para criar uma função em JavaScript?",
        options: ["function myFunction()", "function = myFunction()", "def myFunction()", "create myFunction()"],
        repost: "function myFunction()"
    },
    {
        question: "O que significa a sigla SQL?",
        options: ["Structured Query Language", "Structured Question Language", "Simple Query Language", "System Query Language"],
        repost: "Structured Query Language"
    },
    {
        question: "Qual propriedade do CSS é usada para alterar a cor do texto?",
        options: ["text-color", "font-color", "color", "text-style"],
        repost: "color"
    },
    {
        question: "Qual comando do Git é usado para enviar alterações para um repositório remoto?",
        options: ["git commit", "git push", "git pull", "git clone"],
        repost: "git push"
    },
    {
        question: "Qual é o método correto para adicionar um item ao final de uma array em JavaScript?",
        options: ["add()", "append()", "push()", "insert()"],
        repost: "push()"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question")
const optionsElement = document.getElementById("options")
const submitButton = document.getElementById("submit")
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function carregarQuestion (){
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option =>{
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.value = option;
        li.appendChild(input);
        li.appendChild(document.createTextNode(option));
        optionsElement.appendChild(li);
    });
}

function getSelectedOption (){
    const option = document.getElementsByName("option");
    let selecOption;
    option.forEach(option =>{
        if(option.checked){
            selecOption = option.value;
        }
    });
    return selecOption;
}

function resultado (){
    quiz.style.display = "none";
    resultElement.style.display = "block";
    scoreElement.textContent = `Você acertou ${score} de ${quizQuestions.length} perguntas.`
}

submitButton.addEventListener("click", ()=>{
    const selecOption = getSelectedOption()
    if(selecOption){
    if (selecOption === quizQuestions[currentQuestionIndex].repost){
        score++
    }
    currentQuestionIndex++
     if(currentQuestionIndex < quizQuestions.length){
        carregarQuestion()
     }else{
        resultado()
     }
    } else{
        alert("Por favor, selecione uma opção!");
    }   
})

carregarQuestion();