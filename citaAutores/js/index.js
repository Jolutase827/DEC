function crear(){
    let aleatorio = citas[Math.floor(Math.random()*citas.length)];
    document.getElementById("frase").textContent = '"'+aleatorio.texto+'"';
    document.getElementById("autor").textContent = aleatorio.autor;
}
crear();
document.getElementById("boton").addEventListener('click',()=>{
    crear();
});
