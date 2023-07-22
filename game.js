player1name= localStorage.getItem("player1name");
player2name= localStorage.getItem("player2name");

document.getElementById("player1name").innerHTML=player1name;
document.getElementById("player2name").innerHTML=player2name;

player1score=0;
player2score=0;

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

document.getElementById("playerquestion").innerHTML = "Question turn : " + player1name;
document.getElementById("playeranswer").innerHTML = "Answer turn : " + player2name;

questionturn = "player1";
answerturn = "player2";

function send() {
   mathvar= document.getElementById("number1").value + "X" + document.getElementById("number2").value;



    inputbox = "answer: <input type='text' id='inputtextbox'><br><br>";
    button = "<button onclick='check()' class='btn btn-info'>Check</button><br>";
    row = mathvar + inputbox + button;
    document.getElementById("output").innerHTML = row;

}
function check() {
     math=Number(document.getElementById("number1").value) * Number(document.getElementById("number2").value);
     getanswer = Number(document.getElementById("inputtextbox").value);
    if (math == getanswer ) {
       if (answerturn == "player1") {

            player1score = player1score + 1;
           document.getElementById("player1score").innerHTML = player1score;


        }
        else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;


        }

    }
    if (questionturn == "player1") {
        console.log("smelldirtpook");
        answerturn = "player1";
        document.getElementById("playeranswer").innerHTML = "Answer turn : " + player1name;
        questionturn = "player2";
        document.getElementById("playerquestion").innerHTML = "Question turn : " + player2name;


    }

    else {
        answerturn = "player2";
        document.getElementById("playeranswer").innerHTML = "Answer turn : " + player2name;
        questionturn = "player1";
        document.getElementById("playerquestion").innerHTML = "Question turn : " + player1name;
         
    }
    document.getElementById("number1").value="";
   document.getElementById("number2").value="";


    


}

