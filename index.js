function Setting() {
  // container안에 card 9개 생성
  for (let i = 0; i < 9; i++) {
    let card = document.createElement("div");
    container.appendChild(card);
    card.classList.add("card");
  }
}
let container = document.getElementById("container");
let time = document.querySelector(".time");
let count = 0;
let interval;
function Timer() {
  // 상위에 시간 타이머 표시
  interval = setInterval(function () {
    time.innerText = count;
    count++;
  }, 1000);
}

function start() {
  if (document.getElementById("container").children.length === 0) Setting(); // 셋팅
  numberRender(); // 숫자 표시 함수
  clearInterval(interval); //시간 타이머 초기화
  Timer(); //시간 타이머 작동
}
let arr = []; // 1부터 50까지 숫자 가 들어갈 배열
function numberRender() {
  let cards = container.children;
  arr = [];
  for (let i = 1; i <= 9; i++) {
    arr.push(i);
  }
  for (let i = 0; i < 9; i++) {
    let render = arr.splice(getRandomInt(arr.length), 1);
    console.log(render);
    cards[i].innerText = render;
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
