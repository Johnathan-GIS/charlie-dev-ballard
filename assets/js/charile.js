
const GUEST_NAMES = ["Johnathan", "Dominico", "Kaung", "May", "Kayla"];

function randomGuestName() {
  return GUEST_NAMES[Math.floor(Math.random() * GUEST_NAMES.length)];
}

function greet(name) {
  document.getElementById("greeting").textContent = `Welcome, ${name}!`;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedName = sessionStorage.getItem("playerName");
  if (savedName) {
    greet(savedName);
    document.getElementById("nameInput").value = savedName;
  }

  document.getElementById("nameForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const typed = document.getElementById("nameInput").value.trim();
    const name = typed || randomGuestName();
    sessionStorage.setItem("playerName", name);
    greet(name);
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    sessionStorage.removeItem("playerName");
    document.getElementById("nameInput").value = "";
    document.getElementById("greeting").textContent = "";
  });
});
let jellyfishPosition = $('#jellyfish').position();
let carpPosition = $ ('#carp').position();
let flounderPosition = $('#flounder').position();
let ciscoPosition = $('#cisco').position();

document.querySelector("#resetBtn")
    .addEventListener('click', resetGame); 
    // .addEventListener('click', function(){
    //     console.log('stuff in click f/n IIFE: ', 'whatever')
    // }); 

$('#jellyfish').draggable({

    stop: function() {
        jellyfishPosition = $('#jellyfish').position();
        console.log(jellyfishPosition);           
      }
    }
);
$('#carp').draggable(

{

    stop: function() {
        carpPosition = $('#carp').position();
        console.log(carpPosition);           
      }
    }
);

$('#flounder').draggable(
{

    stop: function() {
        flounderPosition = $('#flounder').position();
        console.log(flounderPosition);           
      }
    }
);

$('#cisco').draggable(
{

    stop: function() {
        ciscoPosition = $('#cisco').position();
        console.log(ciscoPosition);           
      }
    }
);



$('#atlanticocean').droppable({
  
    accept: '#flounder',
  
    drop: function() {
    alert('you win!');
  }
});

$('#gulfofamercia').droppable({
  
    accept: '#jellyfish',
  
    drop: function() {
    alert('you win!');
  }
});

$('#greatlakes').droppable({
  
    accept: '#cisco',
  
    drop: function() {
    alert('you win!');
  }
});
$('#mississippiriver').droppable({
  
    accept: '#carp',
  
    drop: function() {
    alert('you win!');
  }
});
function resetGame(){
    const vanillaCar = document.querySelector("#carp");
    vanillaCar.style.left = "0px";
    vanillaCar.style.top = "0px";
}
const GUEST_NAMES = ["Johnathan", "Dominico", "Kaung", "May", "Kayla"];

function randomGuestName() {
  return GUEST_NAMES[Math.floor(Math.random() * GUEST_NAMES.length)];
}

function greet(name) {
  document.getElementById("greeting").textContent = `Welcome, ${name}!`;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedName = sessionStorage.getItem("playerName");
  if (savedName) {
    greet(savedName);
    document.getElementById("nameInput").value = savedName;
  }

  document.getElementById("nameForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const typed = document.getElementById("nameInput").value.trim();
    const name = typed || randomGuestName();
    sessionStorage.setItem("playerName", name);
    greet(name);
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    sessionStorage.removeItem("playerName");
    document.getElementById("nameInput").value = "";
    document.getElementById("greeting").textContent = "";
  });
});