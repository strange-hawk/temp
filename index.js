var n = Math.floor(Math.random()*6)+1
document.querySelector(".dice img").src="images/dice"+String(n)+".png"
var m = Math.floor(Math.random()*6)+1
document.querySelectorAll(".dice img")[1].src="images/dice"+String(m)+".png"

if (m>n){
    document.querySelector("h1").innerHTML="Player 2 Wins ! ⛳️"
}
else if (n>m){
    document.querySelector("h1").innerHTML="⛳️ Player 1 Wins !"
}
else{
    document.querySelector("h1").innerHTML="Draw !"
}