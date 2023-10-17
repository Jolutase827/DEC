document.getElementById("button").addEventListener('click',()=>{
    let simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(let i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
    document.getElementById("body").style.background = color;
    document.getElementById("h1").innerHTML = color;
});
