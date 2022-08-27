questions = [
    {
        "question" : "What does HTML stand for?", 
        "answer1" : "Home Tool Markup Language",
        "answer2" : "Hypertext Markup Language",
        "answer3" : "Hyperlinks and Text Language",
        "answer4" : "I really do not know",
        "rightAnswer" : 2
    },
    {
        "question" : "Choose the correct HTML element to define important text", 
        "answer1" : "with a b",
        "answer2" : "!needed",
        "answer3" : "!important",
        "answer4" : "!",
        "rightAnswer" : 3
    },
    {
        "question" : "How can you open a link in a new tab/browser window?", 
        "answer1" : "a href='url'target=_blank' ",
        "answer2" : "a href='url'new'",
        "answer3" : "a href='get_new_window'",
        "answer4" : "a href='url'target=new'",
        "note" : "<> Zeichen werden ausgelassen",
        "rightAnswer" : 1

    },
    {
        "question" : "How can you make a ordered list? ", 
        "answer1" : "ol",
        "answer2" : "list",
        "answer3" : "table",
        "answer4" : "l",
        "rightAnswer" : 1
    },
    {
        "question" : "Which HTML element defines the title of a document?", 
        "answer1" : "head",
        "answer2" : "meta",
        "answer3" : "title",
        "answer4" : "headline",
        "rightAnswer" : 3
    },

]

let numberQuestions = document.getElementById('numberQuestions'); 
let questionsId = document.getElementById('questions'); 
let currentQ = 0;

function init() {
    document.getElementById('card').innerHTML = `
    <div class="card" style="width: 34rem;">
    <img src="img/puzzleschach.jpg" class="card-img-top" alt="Quiz IMG">
    <div class="card-body">
      <h5 class="card-title" id="card-title">${questions[currentQ]["question"]}</h5>
      <p class="card-text" id="card-note"> <b> Hinweis </b> : <> Zeichen werden ausgelassen</p>
    </div>
    <ul class="list-group list-group-flush" id="questions">
  
    <li class="list-group-item" onclick="answer(${1})" id="answer1">
         ${questions[currentQ][`answer1`]}  
    </li>
    <li class="list-group-item" onclick="answer(${2})" id="answer2">
         ${questions[currentQ][`answer2`]}  
    </li>
    <li class="list-group-item" onclick="answer(${3})" id="answer3">
         ${questions[currentQ][`answer3`]}  
    </li>
    <li class="list-group-item" onclick="answer(${4})" id="answer4">
         ${questions[currentQ][`answer4`]}  
    </li>

    </ul>
    <div class="card-bottom" id="numberQuestions">
      <span> Frage ${currentQ + 1} von 5 </span>
      <button type="button" class="btn btn-success" onclick="nextQuestion()" id="next-button"disabled>nächste Frage</button> 
    </div>
  </div>
  `; 

}

function nextQuestion() {
    if (currentQ >= questions.length) {

        document.getElementById('card-title').innerHTML = `
        <div class="card" style="border:none;">
            Glückwunsch du hast das Quiz beendet! 
        </div> 
        `; 

        document.getElementById('questions').style ="display:none"; 
        document.getElementById('card-note').style ="display:none"; 
        
    }
    else {
    currentQ++; 
    init(); 
    document.getElementById('next-button').disabled = false; 
    }
}

//a = answer number // Function for calling right or false answer
function answer(a) {
    if (a === questions[currentQ][`rightAnswer`]) { 
        document.getElementById(`answer${a}`).classList.add('bg-success'); 
        document.getElementById('next-button').disabled =false; 
    }
    else {
        document.getElementById(`answer${a}`).classList.add('bg-danger');  

        document.getElementById(`card-note`).innerHTML += `
        <span style="display:flex; justify-content:center; align-items:center; padding-top: 10px; "> 
        Richtig gewesen wäre
       </span> 
        `; 

        setTimeout(showRightAnswer, 1000);

    }
}


function showRightAnswer() {
     document.getElementById(`answer${questions[currentQ][`rightAnswer`]}`).classList.add('bg-success');
     document.getElementById('next-button').disabled =false; 
}