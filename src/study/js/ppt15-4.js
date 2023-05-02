// 색변경
const colorChange = document.querySelector(".color-button");
const pink = document.querySelector(".pink");

// 크기변경
const widChange = document.querySelector(".wid-button");
const black = document.querySelector(".black");

// function을 이용하기 위한 문장
// widChange.onclick= c;
// function c(){
//     black.classList.toggle("bg-width");
// }

widChange.onclick = () => {
    black.classList.toggle("bg-width");
    black.classList.toggle("bg-color1");
}

colorChange.onclick = () => {
    pink.classList.toggle("bg-color");
}
// 마우스 over 시
black.onmouseover = () => {
    black.classList.toggle("bg-color");
}
// 마우스 out 시
black.onmouseout = () => {
    black.classList.toggle("bg-color");
}

