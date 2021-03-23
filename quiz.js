function Send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+"x"+number2+"</h4>";
    inputBox="<br>Answer: <input type='text' id='input_checkBox'>";
    check_button="<br><br><button class='btn btn-info'onclick='Check()'>Check</button>";
    row=question_number+inputBox+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").innerHTML="";
    document.getElementById("number2").innerHTML="";
}
player1_score=0;
player2_score=0;
player1_name=localStorage.getItem("Player1_name");
player2_name=localStorage.getItem("Player2_name");

document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player1_score").innerHTML=":"+player1_score;
document.getElementById("player2_score").innerHTML=":"+player2_score;
question_turn="Player1";
answer_turn="Player2";
document.getElementById("player_question").innerHTML="Question Turn- "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name;

