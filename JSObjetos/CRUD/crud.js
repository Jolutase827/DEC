class Products{
    #id;
    #name;
    #description;
    #category;
    #price;
    #rating;
    constructor(id,name,description,category,price,rating){
        this.#id = id;
        this.#name = name;
        this.#category = category;
        this.#description = description;
        if(isNaN(price)){
            this.#price = null;
        }else{
            this.#price = price;
        }
        if(isNaN(rating)){
            this.#rating = null;
        }else if(parseInt(rating)<1){
            this.#rating = 1;
        }else if(parseInt(rating)>5){
            this.#rating = 6;
        }else{
            this.#rating = parseInt(rating);
        }
    }

    toString(){
        return `Producto: id= ${this.getId()}, name= ${this.#name}, description= ${this.#description}, category= ${this.#category}, price= ${this.#price}, rating= ${this.#rating}.`;
    }

    getId(){
        return this.#id;
    }
    getName(){
        return this.#name;
    }
    getDescription(){
        return this.#description;
    }
    getCategory(){
        return this.#category;
    }
    getPrice(){
        return this.#price;
    }
    getRating(){
        return this.#rating;
    }
    equals(obj){
        if(obj instanceof products){
            return obj.getId() === this.getId();
        }else{
            return false;
        }
    }
}


main();

function main(){
    let articulo = [];
    while(articulo = menu(articulo));
    console.log('ADIOSSSS');
}

function menu(articulo){
    let valor = prompt('---------MENU----------\n 1º Pulsa 1 para eliminar según id\n 2º Pulsa 2 para añadir producto \n 3º Pulsa 3 para actualizar producto\n 4º Pulsa 4 para mostrar valores\n 5º Pulsa 5 para salir');
    while(valor!='1'&&valor!='2'&&valor!='3'&&valor!='4'&&valor!='5'){
        valor = prompt('NO HAS PULSADO 1,2,3,4 O 5\n---------MENU----------\n 1º Pulsa 1 para eliminar según id\n 2º Pulsa 2 para añadir producto \n 3º Pulsa 3 para actualizar producto\n 4º Pulsa 4 para mostrar valores\n 5º Pulsa 5 para salir');
    }
    switch(valor){
        case("1"):
            articulo = eliminarproducto(articulo);
            return articulo;
            break;
        case("2"):  
            anyadirProducto(articulo);
            return articulo;
            break;
        case('3'):
            actualizarProducto(articulo);
            return articulo;
            break;
        case('4'):
            mostrarProducto(articulo);
            return articulo;
            break;
        default:
            return false;
            break;
    }
}

function eliminarproducto(articulos){
    let objetoconIdAEliminar;
    let objetoAEliminar;
    articulos.forEach(element => {
        console.log(element);
    });
    
    do{
        objetoconIdAEliminar = prompt('Escribe el id del producto que quieres eliminar, tienes todos los elementos en la consola\nDeja vacio si quieres volver a menu');
        objetoAEliminar = articulos.filter((name) => name.getId()==objetoconIdAEliminar);
        while(objetoconIdAEliminar!=''&&objetoAEliminar==''){
            objetoconIdAEliminar = prompt('No existe ningún producto con ese ID.\nEscribe el id del producto que quieres eliminar, tienes todos los elementos en la consola\nDeja vacio si quieres volver a menu');
            objetoAEliminar=articulos.filter((name) => name.getId()==objetoconIdAEliminar);
        }
    }while(objetoconIdAEliminar!=''&&siONo(`¿Seguro que quieres que el producto se elimine '${objetoconIdAEliminar}' ("si" o "no"?)`)=='no');
    if(objetoconIdAEliminar!=''){
        articulos = articulos.filter((name) => name.getId()!=objetoconIdAEliminar);
        prompt(objetoAEliminar+"\n Se ha eliminado correctamente");
    }
    console.clear();
    articulos.forEach(element => {
        console.log(element);
    });
    return articulos;


}


function mostrarProducto(articulo){
    let valor = prompt('---------MOSTRAR MENU----------\n 1º Pulsa 1 para mostrar todos los productos ordenados por orden alfabético\n 2º Pulsa 2 para mostrar todo por precio \n 3º Pulsa 3 para mostrar todo por valoración\n 4º Pulsa 4 para filtrar productos\n 5º Pulsa 5 para volver atras');
    while(valor!='1'&&valor!='2'&&valor!='3'&&valor!='4'&&valor!='5'){
        valor = prompt('NO HAS PULSADO 1,2,3,4 O 5\n---------MOSTRAR MENU----------\n 1º Pulsa 1 para mostrar todos los productos ordenados por orden alfabético\n 2º Pulsa 2 para mostrar todo por precio \n 3º Pulsa 3 para mostrar todo por valoración\n 4º Pulsa 4 para filtrar productos\n 5º Pulsa 5 para volver atras');
    }
    switch(valor){
        case("1"):
            mostrarProductosPorNombre(articulo);
            break;
        case("2"):  
            mostrarProductosPorPrecio(articulo);
            break;
        case('3'):
            mostrarProductosPorValoracion(articulo);
            break;
        case('4'):
            filtrar(articulo);
            break;
        default:
            break;
    }
}
function mostrarProductosPorNombre(articulos){
    let valor = prompt('---------ORDEN ALFABETICO----------\n 1º Pulsa 1 para mostrar de la a-z\n 2º Pulsa 2 para mostrar de la z-a\n 3º Pulsa 3 para ir a menu');
    while(valor!='1'&&valor!='2'&&valor!='3'&&valor!='4'&&valor!='5'){
        valor = prompt('NO HAS PULSADO 1,2,3,4 O 5\n---------ORDEN ALFABETICO----------\n 1º Pulsa 1 para mostrar de la a-z\n 2º Pulsa 2 para mostrar de la z-a\n 3º Pulsa 3 para ir a menu');
    }
    switch(valor){
        case("1"):
            articulos.toSorted((a,b)=>a.getName().localeCompare(b.getName())).forEach(element => {
                console.log(element);
            });
            prompt('Los elementos se han mostrado por la consola. \n Pulsa aceptar para ir a menú');
            console.clear();
            break;
        case("2"):  
            articulos.toSorted((a,b)=>b.getName().localeCompare(a.getName())).forEach(element => {
                console.log(element);
            });
            prompt('Los elementos se han mostrado por la consola. \n Pulsa aceptar para ir a menú');
            console.clear();
            break;
        case('3'):
            break;
    }
}
function mostrarProductosPorPrecio(articulos){
    let valor = prompt('---------Mostrar Precio----------\n 1º Pulsa 1 para mostrar de mayor precio a menor\n 2º Pulsa 2 para mostrar demenor precio a mayor\n 3º Pulsa 3 para ir a menu');
    while(valor!='1'&&valor!='2'&&valor!='3'&&valor!='4'&&valor!='5'){
        valor = prompt('NO HAS PULSADO 1,2,3,4 O 5\n---------Mostrar Precio----------\n1º Pulsa 1 para mostrar de mayor precio a menor\n 2º Pulsa 2 para mostrar demenor precio a mayor\n 3º Pulsa 3 para ir a menu');
    }
    switch(valor){
        case("1"):
            articulos.toSorted((a,b)=>b.getPrice()-a.getPrice()).forEach(element => {
                console.log(element);
            });
            prompt('Los elementos se han mostrado por la consola. \n Pulsa aceptar para ir a menú');
            console.clear();
            break;
        case("2"):  
            articulos.toSorted((a,b)=>a.getPrice()-b.getPrice()).forEach(element => {
                console.log(element);
            });
            prompt('Los elementos se han mostrado por la consola. \n Pulsa aceptar para ir a menú');
            console.clear();
            break;
        case('3'):
            break;
    }
}
function mostrarProductosPorValoracion(articulos){
    let valor = prompt('---------Mostrar por Valoración----------\n 1º Pulsa 1 para mostrar de mayor valoración a menor\n 2º Pulsa 2 para mostrar de menor valoración a mayor\n 3º Pulsa 3 para ir a menu');
    while(valor!='1'&&valor!='2'&&valor!='3'&&valor!='4'&&valor!='5'){
        valor = prompt('NO HAS PULSADO 1,2,3,4 O 5\n---------Mostrar por Valoración----------\n 1º Pulsa 1 para mostrar de mayor valoración a menor\n 2º Pulsa 2 para mostrar de menor valoración a mayor\n 3º Pulsa 3 para ir a menu');
    }
    switch(valor){
        case("1"):
            articulos.toSorted((a,b)=>b.getRating()-a.getRating()).forEach(element => {
                console.log(element);
            });
            prompt('Los elementos se han mostrado por la consola. \n Pulsa aceptar para ir a menú');
            console.clear();
            break;
        case("2"):  
            articulos.toSorted((a,b)=>a.getRating()-b.getRating()).forEach(element => {
                console.log(element);
            });
            prompt('Los elementos se han mostrado por la consola. \n Pulsa aceptar para ir a menú');
            console.clear();
            break;
        case('3'):
            break;
    }
}
function filtrar(articulos){
    let categoriaAFiltrar;
    do{
        categoriaAFiltrar = prompt('Escribe la categoría por la que se quiere filtrar')
    }while(siONo(`¿Seguro que quieres filtrar por la categoría '${categoriaAFiltrar}' ("si" o "no"?)`)=='no');
    let valor = prompt('---------Filtrar----------\n 1º Pulsa 1 para mostrar los productos con categoria '+categoriaAFiltrar+' ordenados por orden alfabético\n 2º Pulsa 2 para mostrar los productos con categoria '+categoriaAFiltrar+' ordenados por precio \n 3º Pulsa 3 para mostrar los productos con categoria '+categoriaAFiltrar+'ordenado por valoración\n 4º Pulsa 4 para volver a menu');
    while(valor!='1'&&valor!='2'&&valor!='3'&&valor!='4'){
        valor = prompt('NO HAS PULSADO 1,2,3,4 O 5\n---------Filtrar----------\n 1º Pulsa 1 para mostrar los productos con categoria '+categoriaAFiltrar+' ordenados por orden alfabético\n 2º Pulsa 2 para mostrar los productos con categoria '+categoriaAFiltrar+' ordenados por precio \n 3º Pulsa 3 para mostrar los productos con categoria '+categoriaAFiltrar+'ordenado por valoración\n 4º Pulsa 4 para volver a menu');
    }
    let articulo = [];
    articulos.forEach(element => {
        if(element.getCategory()==categoriaAFiltrar)
            articulo.push(element);
    });
    switch(valor){
        case("1"):
            mostrarProductosPorNombre(articulo);
            break;
        case("2"):  
            mostrarProductosPorPrecio(articulo);
            break;
        case('3'):
            mostrarProductosPorValoracion(articulo);
            break;
        default:
            break;
    }
}



function anyadirProducto(articulos){
    let id;
    let name;
    let description;
    let category;
    let price;
    let rating;
    if(articulos.length==0){
        id =0;
    }else{
        id = articulos[articulos.length-1].getId()+1;
    }
    do{
        name = prompt('Escribe el nombre del producto')
    }while(siONo(`¿Seguro que quieres que el producto tenga como nombre '${name}' ("si" o "no"?)`)=='no');
    do{
        description = prompt('Escribe la descripción del producto')
    }while(siONo(`¿Seguro que quieres que el producto tenga como descripción '${description}' ("si" o "no"?)`)=='no');
    do{
        category = prompt('¿A que categoría pertenece?');
    }while(siONo(`¿Seguro que quieres que el producto tenga como categoría  '${category}' ("si" o "no"?)`)=='no');
    do{
        price = prompt('¿Que precio tiene el producto?')
        while(isNaN(price)){
            price = prompt('Eso no es un número.\n ¿Que precio tiene el producto?')
        }
    }while(siONo(`¿Seguro que quieres que el producto tenga como precio  '${price}€' ("si" o "no"?)`)=='no');
    let ratingValido;
    do{
        ratingValido = true;
        rating = prompt('¿Que valoración le darías al producto del 1 al 5?');
        do{
            ratingValido = true;
            if(isNaN(rating)){
                rating = prompt('Eso no es un número.\n ¿Que valoración le darías al producto del 1 al 5?');
                ratingValido = false;
            }
            if(ratingValido){
                if(parseInt(rating)<1||parseInt(rating)>5){
                    rating = prompt('Tiene que ser un número del 1 al 5.\n ¿Que valoración le darías al producto del 1 al 5?');
                    ratingValido = false;
                }
            }
        }while(!ratingValido);
    }while(siONo(`¿Seguro que quieres que el producto tenga como valoración  '${rating}/5' ("si" o "no"?)`)=='no');
    let producto = new Products(id,name,description,category,price,rating);
    articulos.push(producto);
    prompt(producto.toString()+` Se ha añadido con exito.\n Pulsa aceptar para ir a menu.`);
}
function siONo(mensaje){
    let salida = prompt(mensaje);
    while(salida!='si'&&salida!='no'){
        salida = prompt('Eso no es ni "si" ni "no"\n'+mensaje);
    }
    return salida;
}




