class Products{
    id;
    name;
    description;
    category;
    price;
    rating;
    constructor(id,name,description,category,price,rating){
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        if(isNaN(price)){
            this.price = null;
        }else{
            this.price = price;
        }
        if(isNaN(rating)){
            this.rating = null;
        }else if(parseInt(rating)<1){
            this.rating = 1;
        }else if(parseInt(rating)>5){
            this.rating = 6;
        }else{
            this.rating = parseInt(rating);
        }
    }

    toString(){
        return `Producto: id= ${this.getId()}, name= ${this.name}, description= ${this.description}, category= ${this.category}, price= ${this.price}, rating= ${this.rating}.`;
    }

    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getDescription(){
        return this.description;
    }
    getCategory(){
        return this.category;
    }
    getPrice(){
        return this.price;
    }
    getRating(){
        return this.rating;
    }
    
    setName(name){
        this.name=name;
    }
    setDescription(description){
         this.description=description;
    }
    setCategory(category){
        this.category=category;
    }
    setPrice(price){
        this.price = price;
    }
    setRating(rating){
        this.rating = rating;
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
    if(articulos.length>0){
    let objetoconIdAEliminar;
    let objetoAEliminar;
    mostrarFormatoJSON(articulos);
    
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
    }else{
        prompt('No hay datos aún, inserta productos.');
    }
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
            mostrarFormatoJSON(articulos.toSorted((a,b)=>a.getName().localeCompare(b.getName())));
            prompt('Los elementos se han mostrado por la consola. \n Pulsa aceptar para ir a menú');
            console.clear();
            break;
        case("2"):  
            mostrarFormatoJSON(articulos.toSorted((a,b)=>b.getName().localeCompare(a.getName())));
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
            mostrarFormatoJSON(articulos.toSorted((a,b)=>b.getPrice()-a.getPrice()));
            prompt('Los elementos se han mostrado por la consola. \n Pulsa aceptar para ir a menú');
            console.clear();
            break;
        case("2"):  
            mostrarFormatoJSON(articulos.toSorted((a,b)=>a.getPrice()-b.getPrice()));
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
            mostrarFormatoJSON(articulos.toSorted((a,b)=>b.getRating()-a.getRating()));
            prompt('Los elementos se han mostrado por la consola. \n Pulsa aceptar para ir a menú');
            console.clear();
            break;
        case("2"):  
            mostrarFormatoJSON(articulos.toSorted((a,b)=>a.getRating()-b.getRating()));
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



function mostrarFormatoJSON(elemento){
    let json = JSON.stringify(elemento);
    console.log(json);
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
    const producto = new Products(id,name,description,category,price,rating);
    articulos.push(producto);
    prompt(producto.toString()+` Se ha añadido con exito.\n Pulsa aceptar para ir a menu.`);
}

function actualizarProducto(articulos){
    if(articulos.length>0){
        let id;
        let objetoAEliminar='';
    
        do{
            mostrarFormatoJSON(articulos);
            id = prompt('Escribe el id del producto que quieres actualizar, tienes todos los elementos en la consola\nDeja vacio si quieres volver a menu');
            articulos.forEach(element => {
                if(element.getId()==id)
                    objetoAEliminar = element;
            });
            while(id!=''&&objetoAEliminar==''){
                id = prompt('No existe ningún producto con ese ID.\nEscribe el id del producto que quieres eliminar, tienes todos los elementos en la consola\nDeja vacio si quieres volver a menu');
                articulos.forEach(element => {
                    if(element.getId()==id)
                        objetoAEliminar= element;
                });
            }
        }while(id!=''&&siONo(`¿Seguro que quieres que el producto  '${objetoAEliminar.getName()}' se actualice ("si" o "no"?)`)=='no');
        console.clear();
        let valor;
        let precio;
        let nombre;
        let descripcion;
        let categoria;
        let valoracion;
        let ratingValido;
        do{
            mostrarFormatoJSON(articulos);
            valor = prompt('---------Modificar----------\n 1º Pulsa 1 para cambiar el nombre\n 2º Pulsa 2 para cambiar la descripción \n 3º Pulsa 3 para cambiar la categoría\n 4º Pulsa 4 para cambiar el precio\n 5º Pulsa 5 para cambiar la valoración\n6º Pulsa 6 para salir');
            while(valor!='1'&&valor!='2'&&valor!='3'&&valor!='4'&&valor!='5'&&valor!='6'){
                valor = prompt('NO HAS PULSADO 1,2,3,4,5 O 6\n---------Modificar----------\n 1º Pulsa 1 para cambiar el nombre\n 2º Pulsa 2 para cambiar la descripción \n 3º Pulsa 3 para cambiar la categoría\n 4º Pulsa 4 para cambiar el precio\n 5º Pulsa 5 para cambiar la valoración\n6º Pulsa 6 para salir');
            }
            switch(valor){
                case("1"):
                    
                    do{
                        nombre = prompt(`Escribe el nombre que quieres sustituir por '${objetoAEliminar.getName()}'.\n Deja vacío para ir a atras.`);
                    }while(nombre!=''&&siONo(`¿Seguro que quieres que el producto cambie el nombre '${objetoAEliminar.getName()}' por '${nombre}' ("si" o "no"?)`)=='no');
                    if(nombre!=""){
                        articulos.forEach(element => {
                            if(element.getId()==id)
                                element.setName(nombre);
                        });
                        prompt(articulos.filter((name) => name.getId()==id)+"\nSe ha cambiado con exito el nombre");
                    }
                    console.clear();
                    break;
                case("2"):  
                    
                    do{
                        descripcion = prompt(`Escribe la descripción que quieres sustituir por '${objetoAEliminar.getDescription()}'.\n Deja vacío para ir a atras.`);
                    }while(descripcion!=''&&siONo(`¿Seguro que quieres que el producto cambie la descripción '${objetoAEliminar.getDescription()}' por '${descripcion}' ("si" o "no"?)`)=='no');
                    if(descripcion!=""){
                        articulos.forEach(element => {
                            if(element.getId()==id)
                                element.setDescription(descripcion);
                        });
                        prompt(articulos.filter((name) => name.getId()==id)+"\nSe ha cambiado con exito la descripción");
                    }
                    console.clear();
                    break;
                case('3'):
                    
                    do{
                        categoria = prompt(`Escribe la categoria que quieres sustituir por '${objetoAEliminar.getCategory()}'.\n Deja vacío para ir a atras.`);
                    }while(categoria!=''&&siONo(`¿Seguro que quieres que el producto cambie la categoria '${objetoAEliminar.getCategory()}' por '${categoria}' ("si" o "no"?)`)=='no');
                    if(categoria!=""){
                        articulos.forEach(element => {
                            if(element.getId()==id)
                                element.setCategory(categoria);
                        });
                        prompt(articulos.filter((name) => name.getId()==id)+"\nSe ha cambiado con exito la categoria");
                    }
                    console.clear();
                    break;
                case('4'):
                    do{
                        precio = prompt(`Escribe el precio que quieres sustituir por '${objetoAEliminar.getPrice()}€'.\n Deja vacío para ir a atras.`);
                        while(isNaN(precio)&&precio!=''){
                            precio = prompt(`Eso no es un número.\n Escribe el precio que quieres sustituir por '${objetoAEliminar.getPrice()}€'.\n Deja vacío para ir a atras.`);
                        } 
                    }while(precio!=''&&siONo(`¿Seguro que quieres que el producto cambie el precio '${objetoAEliminar.getPrice()}€' por '${precio}€' ("si" o "no"?)`)=='no');
                    if(precio!=""){
                        articulos.forEach(element => {
                            if(element.getId()==id)
                                element.setPrice(precio);
                        });
                        prompt(articulos.filter((name) => name.getId()==id)+"\nSe ha cambiado con exito el precio");
                    }
                    console.clear();
                    break;
                case('5'): 
                    do{
                        valoracion = prompt(`Escribe la valoración que quieres sustituir por '${objetoAEliminar.getRating()}/5' del 1 al 5.\n Deja vacío para ir a atras.`);
                        do{
                            ratingValido = true;
                            if(isNaN(valoracion)&&valoracion!=''){
                                valoracion = prompt(`Eso no es un número.\n Escribe la valoración que quieres sustituir por '${objetoAEliminar.getRating()}/5' del 1 al 5.\n Deja vacío para ir a atras.`);
                            ratingValido = false;
                            }
                            if(ratingValido&&valoracion!=''){
                                    if(parseInt(valoracion)<1||parseInt(valoracion)>5){
                                        valoracion = prompt(`Tiene que ser un número del 1 al 5.\n \n Escribe la valoración que quieres sustituir por '${objetoAEliminar.getRating()}/5' del 1 al 5.\n Deja vacío para ir a atras.`);
                                        ratingValido = false;
                                    }
                            }
                        }while(!ratingValido);
        
                    }while(valoracion!=''&&siONo(`¿Seguro que quieres que el producto cambie la valoración '${objetoAEliminar.getRating()}' por '${valoracion}' ("si" o "no"?)`)=='no');
                    if(valoracion!=""){
                        articulos.forEach(element => {
                            if(element.getId()==id)
                                element.setRating(valoracion);
                        });
                        prompt(articulos.filter((name) => name.getId()==id)+"\nSe ha cambiado con exito la valoración");
                    }
                    console.clear();
                    break;
                default:
                    console.clear();
                    break;
            }

        }while(valor!='6');
    }else{
        prompt('No hay datos aún, inserta productos.');
    }
    return articulos;
}
function siONo(mensaje){
    let salida = prompt(mensaje);
    while(salida!='si'&&salida!='no'){
        salida = prompt('Eso no es ni "si" ni "no"\n'+mensaje);
    }
    return salida;
}