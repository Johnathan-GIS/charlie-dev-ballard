
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

let fishcardPosition = $('#fishcard').position();
let habitatCardPosition = $('#habitat-card').position();
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

$('#fishcard').draggable(
{

    stop: function() {
        fishcardPosition = $('#fishcard').position();
        console.log(fishcardPosition);           
      }
    }
);



$('#eastcoast').droppable({
  
    accept: '#flounder',
  
    drop: function() {
    alert('you win!');
  }
});

$('#southcoast').droppable({
  
    accept: '#jellyfish',
  
    drop: function() {
    alert('you win!');
  }
});

$('#habitat-card').droppable({
  
    accept: '#fishcard',
  
    drop: function() {
      if (fishcard.id === 'flounder' && habitat-card.id === 'eastcoast') {
        alert('you win!');
      }
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
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.14.1/jquery-ui.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/app.js"></script>
