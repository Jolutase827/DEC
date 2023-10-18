let bestTime = document.getElementById('bestTime');
let circle1 = document.querySelectorAll('#semaforo-1>div[class*="circle"]');
let circle2 = document.querySelectorAll('#semaforo-2>div[class*="circle"]');
let circle3 = document.querySelectorAll('#semaforo-3>div[class*="circle"]');
let circle4 = document.querySelectorAll('#semaforo-4>div[class*="circle"]');
let circle5 = document.querySelectorAll('#semaforo-5>div[class*="circle"]');
let allCircles = document.querySelectorAll('div[class*="circle"]');
let main = document.getElementById('main');
let active = true;
let timeOuts=[];
let lilisecs = "000";
let sec = "00";
let time = document.getElementById('time');

/*function tiempo(){
    lilisecs = parseInt(lilisecs);
    lilisecs++;
    if(lilisecs>999){
        lilisecs = 0;
        if(lilisecs<10){
            lilisecs = "00"+lilisecs;
        }else if(lilisecs<100){
            lilisecs = "0"+lilisecs;
        }
    }else{
        sec = parseInt(sec);
        sec++;
        if(sec<10){
            sec = "0"+sec;
        }
    }
    time.textContent = `${sec}:${lilisecs}`;

}*/



function ponerEnRojo(){
    let aleatorio = Math.floor((Math.random()*4000)+4000);
    circle1.forEach(element => {
        element.style.background= "red";
    });
    timeOuts[0] = setTimeout(()=>{
        circle2.forEach(element => {
            element.style.background = "red";
        });
    },1000);
    timeOuts[1] = setTimeout(()=>{
        circle3.forEach(element => {
            element.style.background = "red";
        });
    },2000);
    timeOuts[2] = setTimeout(()=>{
        circle4.forEach(element => {
            element.style.background = "red";
        });
    },3000);
    timeOuts[3] = setTimeout(()=>{
        circle5.forEach(element => {
            element.style.background = "red";
        });
    },4000);
    timeOuts[4] = setTimeout(()=>{
        allCircles.forEach(element => {
            element.style.background = "green";
        });
    },aleatorio);
    intervalo =setInterval(tiempo,1);
}

function clearAllTeamOuts(){
    timeOuts.forEach(element => {
        clearTimeout(element);
    });
}

main.addEventListener('click',()=>{
    if(active){
        ponerEnRojo();
        active = false;
    }else{
        clearAllTeamOuts();
        allCircles.forEach(element => {
            element.style.background = "gray";
        });
        active = true;
        
    }
    

});