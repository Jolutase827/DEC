
let tareaAñadir; 
document.getElementById("boton").addEventListener('click',()=>{
    tareaAñadir = document.getElementById('taraAñadir').value;
    if(tareaAñadir.length==0){
        console.error("No se puede añadir tareas vacías");
    }else{
        createTarea(tareaAñadir,document.getElementById('contenedorTareas'));
        
    }
});

function createTarea(tarea,tareas){
    const div = document.createElement('div');
    const span = document.createElement('span');
    const emotis = document.createElement('div');
    const tick = document.createElement('i');
    const basura = document.createElement('i');
    div.classList='tarea';
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
        tick.parentElement.parentElement.classList.toggle("tareaEcha");
        });
    basura.addEventListener('click',()=>{
        basura.parentElement.parentElement.remove();
    });
}

