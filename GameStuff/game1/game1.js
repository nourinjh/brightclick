function check(){
    
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var correct = 0;

    if(q1 == "ans"){
        correct++;
    }
    if(q2 == "2x"){
        correct++;
    }
    if(q3 == "bh/2" || q3 == b*h/2){
        correct++;
    }

    var messages = ["Great job, You've earned a point!", "Good effort!"];

    var score;

    if(correct==3){
        score = 0;
    }else if(correct<3){
        score = 1;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got "+correct+" correct.";
}

// function start(){
//     document.getElementById("after_submit").style.visibility = "visible";
// }