const cardsArray = [
  {
    name: "shell",
    img: "img/blueshell.png"
  },
  {
    name: "star",
    img: "img/star.png"
  },
  {
    name: "bobomb",
    img: "img/bobomb.png"
  },
  {
    name: "mario",
    img: "img/mario.png"
  },
  {
    name: "luigi",
    img: "img/luigi.png"
  },
  {
    name: "peach",
    img: "img/peach.png"
  },
  {
    name: "1up",
    img: "img/1up.png"
  },
  {
    name: "mushroom",
    img: "img/mushroom.png"
  },
  {
    name: "thwomp",
    img: "img/thwomp.png"
  },
  {
    name: "bulletbill",
    img: "img/bulletbill.png"
  },
  {
    name: "coin",
    img: "img/coin.png"
  },
  {
    name: "goomba",
    img: "img/goomba.png"
  }
];

const game = document.getElementById("game");

const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

let gameGrid = cardsArray.concat(cardsArray);

let count = 0;

let firstGuess = " ";
let secondGuess = " ";
let previousTarget = null;
let delay = 1200;

gameGrid.sort(() => 0.5 - Math.random());

gameGrid.forEach(item => {
  const card = document.createElement("div");

  card.classList.add("card");

  card.dataset.name = item.name;
   
  const front = document.createElement('div')
    front.classList.add('front');


  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

// Events

grid.addEventListener("click", function(event) {
  let clicked = event.target;

  if (clicked.nodeName === "SECTION" || clicked === previousTarget || clicked.parentNode.classList.contains('selected')|| clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;

    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess)
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add("selected");
    }

    if (firstGuess !== " " && secondGuess !== " ") {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay)
        setTimeout(resetGuesses,delay)

      } else {
          setTimeout(resetGuesses,delay)
          
      }
    }
    previousTarget = clicked;
  }
});

// functions

const match = () => {
  let selected = document.querySelectorAll(".selected");
  selected.forEach(card => {
    card.classList.add("match");
  });
};


const resetGuesses = () => {
    firstGuess = " ";
    secondGuess = " ";
    count = 0;

    let selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.remove('selected');
    })
}