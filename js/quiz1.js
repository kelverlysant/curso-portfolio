const quizQuestions = [
    {
    question: "O que significa HTML?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "HighText Machine Language"],
    repost: "HyperText Markup Language"
},

{
    question: "Qual destes é usado para estilizar páginas da web?",
    options: ["Python", "HTML", "CSS", "SQL" ],
    repost: "CSS"
},

{
    question: "Qual destas opções declarar uma variável em JavaScript?",
    options: ["Var", "Let", "Const", "Todas as anteriores"],
    repost: "Todas as anteriores"
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