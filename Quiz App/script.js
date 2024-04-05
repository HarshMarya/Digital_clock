const quizData = [
    {
        question:"Javascript is an _______ language?",
        a:"Object-Oriented",
        b:"Object-based",
        c:"Procedural",
        d:"none of the above",
        correct:"a",
    },
    {
        question:"Which of the following keywords is used to define a variable in Javascript?",
        a:"var",
        b:"let",
        c:"Both A and B",
        d:"none of the above",
        correct:"c",
    },
    {
        question:"Which of the following methods is used to access HTML elements using Javascript?",
        a:"getElementById()",
        b:"getElementByClassName()",
        c:"Both A and B",
        d:"none of the above",
        correct:"c",
    },
    {
        question:"Which of the following methods can be used to display data in some form using Javascript?",
        a:"document.write()",
        b:"console.log()",
        c:"window.alert()",
        d:"All of above",
        correct:"d",
    },
    {
        question:"How can a datatype be declared to be a constant type?",
        a:"const",
        b:"var",
        c:"let",
        d:"constant",
        correct:"a",
    },
    {
        question:`
        What does … operator do in JS?`,
        a:"It is used to spread iterables to individual elements",
        b:"It is used to describe a datatype of undefined size",
        c:"No such operator exists",
        d:"None of the above",
        correct:"a",
    }
]

const questionEls = document.querySelector(".question" )
const answerEls = document.querySelectorAll(".answer" )
const quiz = document.querySelector(".container")
const a_text = document.querySelector(".a_text")
const b_text = document.querySelector(".b_text")
const c_text = document.querySelector(".c_text")
const d_text = document.querySelector(".d_text")
const btn = document.querySelector(".btn")

let currentQuiz = 0;
let score = 0;
loadQuiz()

function loadQuiz(){
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz]
    questionEls.innerHTML = currentQuizData.question

    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d    
    // console.log(questionEls.innerHTML);
}

function deselectAnswer() {
    answerEls.forEach(ansEl => ansEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer
}

btn.addEventListener('click', ()=>{
    const answer = getSelected()
    // console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innerHTML = `<h3 class="result">You answered correctly at ${score} / ${quizData.length} question</h3>
            
            <button class="btn" onclick="location.reload()">Reload</button>`

            btn.style.display = "none"
        }
    }
})
