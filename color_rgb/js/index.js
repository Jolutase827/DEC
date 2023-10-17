const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const pr = document.getElementById("pr");
const pg = document.getElementById("pg");
const pb = document.getElementById("pb");
const main = document.getElementById("main");
red.addEventListener('input',()=>{
    main.style.background = `rgb(${red.value},${green.value},${blue.value})`;
    pr.textContent = red.value;
});
green.addEventListener('input',()=>{
    main.style.background = `rgb(${red.value},${green.value},${blue.value})`;
    pg.textContent = green.value;
});
blue.addEventListener('input',()=>{
    main.style.background = `rgb(${red.value},${green.value},${blue.value})`;
    pb.textContent = blue.value;
});
