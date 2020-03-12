var p1 = prompt("Player 1 name");
var p2 = prompt("Player 2 name");
document.querySelector("H1").textContent = p1 +" vs "+p2;

function play(){
  var randomnum1 = Math.floor((Math.random()*6)+1);
  var randomnum2 = Math.floor((Math.random()*6)+1);
  var src1 = "images/dice"+randomnum1+".png";
  var src2 = "images/dice"+randomnum2+".png";
  document.querySelector(".img1").setAttribute("src",src1);
  document.querySelector(".img2").setAttribute("src",src2);
  if (src1 > src2){
    var text = "🚩 "+p1+" is the Winner";
  }else if(src2 > src1){
    var text = p2 +" is the Winner 🚩";
  }else{
    var text = "Draw";
  }
  document.querySelector("H1").textContent = text;
}
