let bestTime = document.getElementById('bestTime');
let circle1 = document.querySelectorAll('#semaforo-1>div[class*="circle"]');
let circle2 = document.querySelectorAll('#semaforo-2>div[class*="circle"]');
let circle3 = document.querySelectorAll('#semaforo-3>div[class*="circle"]');
let circle4 = document.querySelectorAll('#semaforo-4>div[class*="circle"]');
let circle5 = document.querySelectorAll('#semaforo-5>div[class*="circle"]');
let allCircles = document.querySelectorAll('div[class*="circle"]');
let arrayBestTime=[];
let main = document.getElementById('main');
let active = true;
let timeOuts=[];
let lilisecs = "000";
let sec = "00";
let time = document.getElementById('time');
let tiempoMomento;
let acabado;
let tiempoClicado;
let secA;
let milsA;
const evento = ()=>{
    if(active){
        time.textContent = "00:000";
        ponerEnRojo();
        active = false;
    }else{
        clearAllTeamOuts();
        allCircles.forEach(element => {
            element.style.background = "gray";
        });
        if(!acabado){
            time.textContent = "TOO FAST";
        }else{
            tiempoClicado = window.performance.now();
            let sec = parseInt((tiempoClicado-tiempoMomento)/1000);
            let mils= (tiempoClicado>999)?((String)(tiempoClicado-tiempoMomento)).substring(((String)(tiempoClicado-tiempoMomento)).length-3,((String)(tiempoClicado-tiempoMomento)).length):(tiempoClicado-tiempoMomento);
            time.textContent = `${(sec<10)?"0"+sec:sec}:${(mils<100)?"0"+mils:mils}`;
            if(arrayBestTime.length==0){
                arrayBestTime[0]=sec;
                arrayBestTime[1] = mils;
                bestTime.textContent = `${(sec<10)?"0"+sec:sec}:${(mils<100)?"0"+mils:mils}`;
            }else if(arrayBestTime[0]>=sec&&arrayBestTime[1]>mils){
                arrayBestTime[0]=sec;
                arrayBestTime[1] = mils;
                bestTime.textContent = `${(sec<10)?"0"+sec:sec}:${(mils<100)?"0"+mils:mils}`;
            }
        }
        active = true;
    }
    

};
function ponerEnRojo(){
    let aleatorio = Math.floor((Math.random()*4000)+4000);
    acabado = false;
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
    timeOuts[5] = setTimeout(()=>{
        tiempoMomento = window.performance.now();
    },aleatorio);
    timeOuts[6] = setTimeout(()=>{
        acabado=true;
    },aleatorio);
    
    
}
function clearAllTeamOuts(){
    timeOuts.forEach(element => {
        clearTimeout(element);
    });
}
function comprobarAllCirclesGreen(){
    allCircles.forEach(element => {
        if (element.style.background != "green"){
            return false;
        }
        return true;
    });
}

main.addEventListener('click',evento);
document.addEventListener('keydown',evento);
