//selecting all required elements
//const start_btn = document.querySelector(".start_btn button");
//const info_box = document.querySelector(".info_box");
//const exit_btn = info_box.querySelector(".buttons .quit"); //to review
//const continue_btn = info_box.querySelector(".buttons .restart"); to review
//const quiz_box = document.querySelector(".quiz_box");
//const result_box = document.querySelector(".result_box"); to review
const option_list = document.querySelector(".partiti");
//const time_line = document.querySelector("header .time_line");
//const timeText = document.querySelector(".timer .time_left_txt");
//const timeCount = document.querySelector(".timer .timer_sec");
const inizia_btn = document.querySelector("#Inizia")
const opzione1 = document.querySelector (".didascalia")
const opzione2 = document.querySelector (".didascalia1")
const opzione3 = document.querySelector (".didascalia2")
const opzione4 = document.querySelector (".didascalia3")
const opzione5 = document.querySelector (".didascalia4")
const section_game = document.querySelector("#game")
const corretta= document.querySelector('.risposta_esatta')
const sbagliata=document.querySelector('.risposta_sbagliata')
const loghi = document.querySelectorAll('.dot')
const option_list1=document.querySelectorAll("prova2 > img:not(.dot correct) ")
const testata=document.querySelector('.testata_container')
var risposte_arr=[] //response array for result box


//if "Inizia" button clicked

inizia_btn.onclick = ()=>{ //da definire inizia_btn
    
    showQuetion(0); //calling showQuestions function
    queCounter(1); //passing 1 parameter to queCounter
    inizia_btn.classList.add('hide'); //you can delete it
    testata.classList.add('hide')
    section_game.classList.add('show')
    //window.scrollBy(0, 1000); for scrollying down
}

//First Attempt

// if continueQuiz button clicked
//continue_btn.onclick = ()=>{
//    info_box.classList.remove("activeInfo"); //hide info box
//    quiz_box.classList.add("activeQuiz"); //show quiz box
//    showQuetions(0); //calling showQestions function
//    queCounter(1); //passing 1 parameter to queCounter
//    startTimer(15); //calling startTimer function
//    startTimerLine(0); //calling startTimerLine function
//}

//let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter; //per la barra nel risultato finale
let counterLine;
let widthValue = 0;

//const restart_quiz = result_box.querySelector(".buttons .restart"); to review
//const quit_quiz = result_box.querySelector(".buttons .quit"); to review

// if restartQuiz button clicked

//restart_quiz.onclick = ()=>{
//    section_game.classList.add('show') //show quiz box
//    result_box.classList.remove("activeResult"); //hide result box
//    que_count = 0;
//    que_numb = 1;
//    userScore = 0;
//    widthValue = 0;
//    showQuetion(que_count); //calling showQestions function
//    queCounter(que_numb); //passing que_numb value to queCounter
//    clearInterval(counter); //clear counter
//    clearInterval(counterLine); //clear counterLine
//    startTimer(timeValue); //calling startTimer function
//    startTimerLine(widthValue); //calling startTimerLine function
//    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
//    next_btn.classList.remove("show"); //hide the next button
//}

// if quitQuiz button clicked
//quit_quiz.onclick = ()=>{
//    window.location.reload(); //reload the current window
//}

const next_btn = document.querySelector("#btn");
const bottom_ques_counter = document.querySelector(".occhiello .argomento #numero");




// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetion(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        //startTimer(timeValue); //calling startTimer function
        //startTimerLine(widthValue); //calling startTimerLine function
        //timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}
//getting questions and option from array

function showQuetion(index){
    const que_text = document.querySelector(".container-text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].question +'</span>';
    let option_tag = '<div class="domanda"><p>Chi lo dice?</p></div><div class="prova2"><img class= "dot" id= "' + questions[index].id[0] + '" src="/img/' + questions[index].options[0] + '.png"></span> <p class=didascalia>'+ questions[index].options[0] + '</p></div>'
    +'<div class="prova2"><img class= "dot" id= "' + questions[index].id[1] + '" src="/img/' + questions[index].options[1] + '.png"></img></span> <p class=didascalia>'+ questions[index].options[1] + '</p></div>'
    +'<div class="prova2"><img class= "dot" id= "' + questions[index].id[2] + '" src="/img/' + questions[index].options[2] + '.png"></span> <p class=didascalia>'+ questions[index].options[2] + '</p></div>'
    +'<div class="prova2"><img class= "dot" id= "' + questions[index].id[3] + '" src="/img/' + questions[index].options[3] + '.png"></span> <p class=didascalia>'+ questions[index].options[3] + '</p></div>'
    +'<div class="prova2"><img class= "dot" id= "' + questions[index].id[4] + '" src="/img/' + questions[index].options[4] + '.png"></span> <p class=didascalia>'+ questions[index].options[4] + '</p></div></div>';
    
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".didascalia");
    console.log(questions[index].options[1]);
    const options =option_list.querySelectorAll(".dot");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");

    }
    for(i=0; i < options.length; i++){
        options[i].setAttribute("onclick", "optionSelected(this)");
        

    }
    corretta.classList.remove('show')
    sbagliata.classList.remove('show')
}


// creating the new div tags which for icons

let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';



//if user clicked on option
function optionSelected(answer){
    //clearInterval(counter); //clear counter
    //clearInterval(counterLine); //clear counterLine
    //let userAns = answer.textContent; //getting user selected option
    let userAns = answer.id; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        
        let id_logo= '#' + answer.id
        let logo_correct = document.querySelector(id_logo);
        
        logo_correct.classList.add("correct");
        //option_list1.classList.add('transparent');
        //answer.classList.add("correct"); //adding green color to correct selected option
        //let tickIconTag = '<div class="risposta_esatta"><img src="img/iconcorrect.svg.png" class="icon_correct" alt=""><h3 class="titolo_esatto">Risposta esatta</h3><p class="subtitle_esatto">Si, <b>Nome partito</b> lorem ipsum....</p></div>';
        
        //answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        corretta.classList.add('show')
        risposte_arr.push(1);
        console.log(risposte_arr)
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
        console.log(answer)
    }else{
        //answer.classList.add("incorrect"); //adding red color to correct selected option
        //let crossIconTag = '<div class="risposta_sbagliata"><img src="img/Sbagliato_X.svg" class="icon_correct" alt=""><h3 class="titolo_sbagliato">Risposta sbagliata</h3><p class="subtitle_esatto">No, <b>Nome partito</b> lorem ipsum....</p></div>';
        console.log(answer.id)
        risposte_arr.push(0);
        console.log(risposte_arr)
        let id_logo= '#' + correcAns
        let logo_correct = document.querySelector(id_logo);
        logo_correct.classList.add("correct");
        let id_logo1= '#' + answer.id
        
        let logo_correct1 = document.querySelector(id_logo1);
        logo_correct1.classList.add("incorrect");
        sbagliata.classList.add('show')
        //answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    //loghi.classList.add('disabled') sbagliato
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    //if statement for the text to display-->Talk with Luca in order to get the text 
    if (userScore > 15){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Bravo! , Hai ottenuto <p>'+ userScore +'</p> su <p>'+ questions.length +' Continua a sfidarti su Indecis.it</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 10){ // if user scored more than 1
        let scoreTag = '<span>Buon lavoro , Hai ottenuto <p>'+ userScore +'</p> su <p>'+ questions.length +' Prova a migliorare su Indecis.it</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 5){ // if user scored more than 1
        let scoreTag = '<span>Si può migliorare , Hai ottenuto <p>'+ userScore +'</p> su <p>'+ questions.length +' Prova a studiare su Indecis.it</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 5
        let scoreTag = '<span> Sei una schifezza, hai ottenuto <p>'+ userScore +'</p> su <p>'+ questions.length +' Ecco il sito su cui puoi riprovare</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//function startTimer(time){
//    counter = setInterval(timer, 1000);
//    function timer(){
//        timeCount.textContent = time; //changing the value of timeCount with time value
//        time--; //decrement the time value
//        if(time < 9){ //if timer is less than 9
//            let addZero = timeCount.textContent; 
//            timeCount.textContent = "0" + addZero; //add a 0 before time value
//        }
//        if(time < 0){ //if timer is less than 0
//            clearInterval(counter); //clear counter
//            timeText.textContent = "Time Off"; //change the time text to time off
//            const allOptions = option_list.children.length; //getting all option items
//            let correcAns = questions[que_count].answer; //getting correct answer from array
//            for(i=0; i < allOptions; i++){
//                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
//                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
//                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
//                    console.log("Time Off: Auto selected correct answer.");
//                }
//            }
//            for(i=0; i < allOptions; i++){
//                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
//            }
//            next_btn.classList.add("show"); //show the next button if user selected any option
//        }
//    }
//}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span class="numero">'+ index +'/' + questions.length + '</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
