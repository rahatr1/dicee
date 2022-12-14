document.getElementById('dicebtn').onclick = () => {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var diceImage1 = "images/dice" + randomNumber1 + ".png";
  var diceImage2 = "images/dice" + randomNumber2 + ".png";

  var img1 = document.getElementById('im1');
  var img2 = document.getElementById('im2');

  img1.src = diceImage1;
  img2.src = diceImage2;

  var h1 = document.getElementById('h1');

  if(randomNumber1 > randomNumber2){
    h1.innerHTML = localStorage.getItem('user1') + " Won";
  } else if (randomNumber1 == randomNumber2){
    h1.innerHTML = "Tie, Roll Again";
  } else {
    h1.innerHTML = localStorage.getItem('user2') + " Won";
  }
  
}

if (localStorage.length>0){
  var px = document.getElementById('px');
  var py = document.getElementById('py');
 px.innerHTML = localStorage.getItem('user1');
  py.innerHTML = localStorage.getItem('user2');
  
}

onbeforeunload = function (e) { localStorage. clear(); };