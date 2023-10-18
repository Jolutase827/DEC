const pause = document.getElementById('pause');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const time = document.getElementById('time');
let intervalo;
let hora,mins,sec;
hora = time.textContent.substring(0,2);
mins = time.textContent.substring(3,5);
sec = time.textContent.substring(7,9);
function sumarTiempo(){
    sec = parseInt(sec);
    sec++;
    if(sec>59){
        sec="00";
        mins = parseInt(mins);
        mins++;
        if(mins>59){
            mins="00";
            hora = parseInt(hora);
            hora++;
            if(hora<10){
                hora="0"+hora;
            }
        }else if(mins<10){
            mins="0"+mins;
        }
    }else if(sec<10){
        sec="0"+sec;
    }
    time.textContent = `${hora}:${mins}:${sec}`;
}


start.addEventListener('click',()=>{
    intervalo = window.setInterval(sumarTiempo,1000);
    pause.style.display = "inline";
    start.style.display = "none";
});
pause.addEventListener('click',()=>{
    window.clearInterval(intervalo);
    pause.style.display = "none";
    start.style.display = "inline";
});
reset.addEventListener('click',()=>{
    window.clearInterval(intervalo);
    time.textContent = "00:00:00";
    hora = time.textContent.substring(0,2);
    mins = time.textContent.substring(3,5);
    sec = time.textContent.substring(7,9);
    pause.style.display = "none";
    start.style.display = "inline";
});