
class Tarea{
    id;
    nombre;
    hecho;
    constructor(id,nombre){
        this.id=id;
        this.nombre = nombre;
        this.hecho = true;
    }
}   
let tareaAñadir; 
let tareaslist;
if(localStorage.getItem('tareas')!=undefined){
    tareaslist = JSON.parse(localStorage.getItem('tareas'));
    if(tareaslist.length!=0){
        tareaslist.forEach(element => {
            createTarea(element.nombre,document.getElementById('contenedorTareas'),tareaslist.length-1,element.id);
        });
    }
}else{
    tareaslist = [];
}
document.getElementById("boton").addEventListener('click',()=>{
    tareaAñadir = document.getElementById('taraAñadir').value;
    if(tareaAñadir.length==0){
        console.error("No se puede añadir tareas vacías");
    }else{
        if(tareaslist.length ==0){
            tareaslist.push(new Tarea(0,tareaAñadir));
        }else{
            tareaslist.push(new Tarea(tareaslist[tareaslist.length-1].id+1,tareaAñadir));
        }
        createTarea(tareaAñadir,document.getElementById('contenedorTareas'),tareaslist.length-1,tareaslist[tareaslist.length-1].id);
    }
});


window.addEventListener('beforeunload', ()=> {
    localStorage.setItem('tareas',JSON.stringify(tareaslist));    
});
function createTarea(tarea,tareas,posicion,id){
    const div = document.createElement('div');
    const span = document.createElement('span');
    const emotis = document.createElement('div');
    const tick = document.createElement('i');
    const basura = document.createElement('i');
    if(tareaslist[posicion].hecho){
        div.classList='tarea';
    }else{
        div.classList='tareaEcha';
    }
    span.textContent = tarea;
    tick.classList='bi bi-check-circle-fill tick';
    basura.classList='bi bi-trash-fill basura';
    emotis.classList='emoticonos';
    emotis.append(tick);
    emotis.append(basura);
    div.append(span);
    div.append(emotis);
    tareas.append(div);
    tick.addEventListener('click',()=>{
        if(tareaslist[posicion].hecho){
            tick.parentElement.parentElement.classList="tareaEcha";
            tareaslist[posicion].hecho = false;
        }else{
            tick.parentElement.parentElement.classList ="tarea";
            tareaslist[posicion].hecho = true;
        }
        
    });
    basura.addEventListener('click',()=>{
        tareaslist = tareaslist.filter((t)=>t.id!=id);
        basura.parentElement.parentElement.remove();
    });
}

