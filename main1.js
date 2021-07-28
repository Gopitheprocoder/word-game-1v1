player1_name=localStorage.getItem("player_1");
player2_name=localStorage.getItem("player_2");

score_1=0;
score_2=0;
document.getElementById("player1").innerHTML=player1_name+":";
document.getElementById("player2").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=score_1;
document.getElementById("player2_score").innerHTML=score_2;
document.getElementById("player_q").innerHTML="Question turn"+player1_name;
document.getElementById("player_a").innerHTML="Answer turn"+player2_name;

function send(){
get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
console.log("word in lower case="+word);

charAt1=word.charAt(1);
console.log(charAt1);

divide_2=Math.floor(word.length/2);
charAt2=word.charAt(divide_2);
console.log(charAt2);

minus_1=word.length-1;
charAt3=word.charAt(minus_1);
console.log(charAt3);

remove_charAt1=word.replace(charAt1,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3);

question="<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
inputbox="<br>Answer:<input type='text' id='input_check'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row=question+inputbox+check_button;
document.getElementById("output").innerHTML=row;
}