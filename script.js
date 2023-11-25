const questions=[
    {
        question: "which is the largest animal in the world",
        answer:[
            {text:"shark", correct: false},
            {text:"Blue Wheal", correct: true},
            {text:"Giraaf", correct: false},
            {text:"Elephent", correct: false}
        ]
        
    },
    {
        question: "which is the smallest country in the world",
        answer:[
            {text:"shark", correct: false},
            {text:"Blue Wheal", correct: true},
            {text:"Giraaf", correct: false},
            {text:"Elephent", correct: false}
        ]  
    },
    {
        question: "which is the largest animal in the world",
        answer:[
            {text:"shark", correct: false},
            {text:"Blue Wheal", correct: true},
            {text:"Giraaf", correct: false},
            {text:"Elephent", correct: false}
        ]
    },
    {
        question: "which is the largest animal in the world",
        answer:[
            {text:"shark", correct: false},
            {text:"Blue Wheal", correct: true},
            {text:"Giraaf", correct: false},
            {text:"Elephent", correct: false}
        ]
    }
    
]
const questionelement = document.getElementById("Question");
const answerbtns = document.getElementById("btnn");
const nextbtn = document.getElementById("next-btn");

let curruntQuestionIndex = 0;
let score = 0;

function startQuiz(){
    curruntQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML="Next";
    showQuestion();
}
 function showQuestion(){
    resetState();
    let curruntquestion = questions[curruntQuestionIndex];
    let questionNo =   curruntQuestionIndex+1;
    questionelement.innerHTML = questionNo + "." + curruntquestion.question; 

    curruntquestion.answer.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerbtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)

    });
 }
 function resetState(){
    nextbtn.style.display="none";
    while(answerbtns.firstChild){
        answerbtns.removeChild(answerbtns.firstChild);
    }

 }
  function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from( answerbtns.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =   "true"
    });
    nextbtn.style.display="block";
  }
 function showScore(){
    resetState();
    questionelement.innerHTML =`your score ${score} out of ${questions.length}!`;
    nextbtn.innerHTML ="play Agian";
    nextbtn.style.display="block"

 }

  function handleNextButton(){
    curruntQuestionIndex++;
    if(curruntQuestionIndex <questions.length){
        showQuestion();
    }else{
            showScore()

            }
    }


  nextbtn.addEventListener("click" ,()=>{
    if(curruntQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
  })
 startQuiz();