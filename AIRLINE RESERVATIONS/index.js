class Reservation{
    id;
    planeNumber;
    seatCode;
    moneyCost;
    nameOfThePerson;
    passport;
    
    constructor(id,planeNumber,seatCode,moneyCost,nameOfThePerson,passport){
        this.planeNumber=planeNumber;
        this.seatCode = seatCode;
        this.moneyCost = moneyCost;
        this.nameOfThePerson = nameOfThePerson;
        this.passport = passport;
        this.id = id;
    }


}

class Passenger{
    id;
    name;
    password; 
    reservations;
    money;
    constructor(id, name, password){
        this.reservations = [];
        this.money =0;
        this.id = id;
        this.name = name;
        this.password = password;

    }

    addSeat(seat){
        this.money += seat.moneyCost;
        this.reservations.push(seat);
        
    }

    changeSeat(seatId,seatCode){
        let reservation = this.reservations.filter(seat=> seat.id == seatId);
        if(reservation[0].seatCode==""){
            reservation[0].moneyCost+=10;
            this.money+=10;
            reservation[0].seatCode=seatCode;
        }else{
            reservation[0].seatCode=seatCode;
        }
    }

}

const comprobarAsiento = (dato,seats,planeNumber)=>{
    let numero;
    if(dato==""){
        return true;
    }
    if(dato.length!=3){
        prompt("Invalid format");
        return false;
    }
    if(isNaN(dato.charAt(0))||isNaN(dato.charAt(1))){
        prompt("You dont write a number first");
        return false;
    }
    numero=parseInt(dato.charAt(0)+dato.charAt(1));
    if(numero>30||numero<1){
        prompt("Invalid number");
        return false;
    }
    if(dato.charAt(2)<'A'||dato.charAt(2)>'F'){
        prompt("Invalid leter");
        return false;
    }
    let seat = seats.filter(seat=> seat.planeNumber == planeNumber && seat.seatCode == dato);
    if(seat[0]!=undefined){
        prompt("Este asiento no esta disponible.");
        return false;
    }
    return true;
}

const showDisponibleSeats = (seats,planeNumber)=>{
    let exit = "";
    let selectedSeats = seats.filter(seat => seat.planeNumber==planeNumber);
    let aux;
    let codeAux;
    for(let i =1; i<=30;i++){
        exit ="";
        for(let j=0;j<6;j++){
            codeAux= ((i<10)?"0"+i:""+i)+String.fromCharCode("A".charCodeAt(0)+j);
            aux = selectedSeats.filter(seat => seat.seatCode==codeAux);
            if(aux[0]!=undefined)
            exit += "["+codeAux+"]";
            else
            exit += " "+codeAux+" ";
        }
        console.log(exit);
    }
}
const buyTickets = (dato,paso,idUser,objects,datos,planeNumber,seats) =>{
    if(paso==0){
        datos=[];
        dato = prompt("Let's start.\n How it works: You're gonna anwer the questions to buy your tikets if you want to stop dont write nothing and press accept\n WHAT IS THE NAME OF THE PASSENGER?");
        datos[0]=dato;
        return buyTickets(dato,1,idUser,objects,datos,planeNumber,seats);
    }
    if(dato==""&&paso!=2){
        return true;
    }
    if(paso==1){
        showDisponibleSeats(seats,planeNumber);
        dato = prompt("IF YOU WANT TO BUY A SEAT PLEASE WRITE WHITH THE FORMAT '01A 01B 01C   01D 01E 01F' AND YOU HAVE 30 ROWS\n IF YOU DONT WANT IT DONT WRITE NOTHING. YOU HAVE THE DISPONIBLE SEATS IN THE CONSOLE");
        while(!comprobarAsiento(dato,seats,planeNumber)){
            dato = prompt("I'M GONNA REPEAT \n IF YOU WANT TO BUY A SEAT PLEASE WRITE WHITH THE FORMAT '01A 01B 01C   01D 01E 01F' AND YOU HAVE 30 ROWS\n IF YOU DONT WANT IT DONT WRITE NOTHING.\n YOU HAVE THE DISPONIBLE SEATS IN THE CONSOLE, THE PICKED SEATS ARE LIKE THIS'[01F]'");
        }
        console.clear();
        if(dato==""){
            datos[2] = 300;
        }else{
            datos[2] = 310;
        }
        datos[1] = dato;
        
        return buyTickets(dato,2,idUser,objects,datos,planeNumber,seats);
    }
    if(paso==2){
        dato = prompt("How it works: You're gonna anwer the questions to buy your tikets if you want to stop dont write nothing and press accept\n FINALY WHAT IS THE PASSPORT OR DNI OF THE PASSENGER?");
        datos[3]=dato;
        let id;
        if(seats.length==0){
            id=0;
        }else{
            id= seats[seats.length-1].id+1;
        }
        let reservation = new Reservation(id,planeNumber,datos[1],datos[2],datos[0],datos[3]);
        let objeto = objects.filter((user)=> user.id==idUser); 
        objeto[0].addSeat(reservation);
        seats.push(reservation);
        return buyTickets(dato,0,idUser,objects,datos,planeNumber,seats);
    }

}

const createUser = (objects,passengers)=>{
    let name = prompt("Tell me your name");
    let user1 = objects.filter(user => user.name==name);
    while(user1[0]!=undefined && objects.length>0){
        name = prompt("This name has already picked\n Tell me another name");
        user1 =  objects.filter(user =>user.name==name);
    }
    let password = prompt("Tell me a password");
    let rpassword = prompt("Repeat the password");
    while(password!=rpassword){
        password = prompt("THE PASSWORDS DO NOT MATCH.\n Tell me a password");
        rpassword = prompt("Repeat the password");
    }
    let numero;
    if(objects.length==0)
        numero=0;
    else
        numero = objects[objects.length-1].id+1;
    objects.push(new Passenger(numero,name,password));
}
const login = (dato,objects,passengers,planeNumber,seats) =>{
    if(dato==null)
    return login(prompt("----------Menu-----------\n Are you log in?\n 1º Press 1 if yes.\n 2º Press 2 if no\n 3º Press 3 to go to menu."),objects,passengers,planeNumber,seats);
   if(dato==1){
        if(objects.length==0){
            prompt("Not user registed, pls register first.");
            return login(null,objects,passengers,planeNumber,seats)
        }else{
            let name = prompt("What is your name");
            let password = prompt("What is your password");
            let user = objects.filter(user => user.name==name&&password==user.password);
            if(user[0]!=undefined){
                buyTickets(null,0,user[0].id,objects,passengers,planeNumber,seats);
            }else{
                prompt("Not exist users with this caracteristics");
                return login(null,objects,passengers,planeNumber,seats);
            }
        }
   }else if(dato==2){
        createUser(objects,passengers);
        return login(null,objects,null,planeNumber,seats);
   }else if(dato==3)
       return false;
   else
       return login(prompt("YOU DIDN'T PRESS 1, 2 or 3\n----------Menu-----------\n Are you log in?\n 1º Press 1 if yes.\n 2º Press 2 if no\n 3º Press 3 to go to menu."),objects,passengers,planeNumber,seats);
};
const generateAGoodSeatCode = (seats,planeNumber)=>{
    let numero,letra,asiento;
    do{
        numero = parseInt((Math.random()*30)+1);
        if(numero<10){
            numero ="0"+numero;
        }
        letra = String.fromCharCode("A".charCodeAt(0)+(Math.random()*6));
        asiento = numero+""+letra;
    }while(!comprobarAsiento(asiento,seats,planeNumber));
    return asiento;
};
const aplyChanges = (seats,planeNumber) =>{
    let seatsWithoutSeats = seats.filter(seat => seat.seatCode=="");
    seatsWithoutSeats.forEach(element => {
        element.seatCode = generateAGoodSeatCode(seats,planeNumber);
    });
};
const makePlaneFly= (passengers,objects,planeNumber,seats)=>{
    aplyChanges(seats,planeNumber);
    let seatToFly = seats.filter(seat =>seat.planeNumber==planeNumber);
    console.log(JSON.stringify(seatToFly));
    prompt("The fly with Israel direction nº"+planeNumber+" fligth with "+seatToFly.length+" passengers, you can see all the reservations in the console");
    console.clear();
    planeNumber++;
    return menu(null,passengers,objects,planeNumber,seats);
};

const changeSeat = (dato,paso,idUser,objects,datos,planeNumber,seats)=>{
    if(dato==null){
        let user = objects.filter(user => user.id==idUser);
        let userSeats = user[0].reservations.filter(seat => seat.planeNumber==planeNumber);
        if(userSeats.length>0){
            console.log(JSON.stringify(userSeats));
            let seatId = prompt("Select a reservation with the id that you want to change the seat.\n You can see all your reservations for this plane in the console.\If you want go to the menu you have to put nothing.");
            let userSeat = userSeats.filter(seat=>seat.id  == seatId);
            while(userSeat[0]==undefined&&seatId!=""){
                seatId = prompt("This reservation doesn't exist.\nSelect a reservation with the id that you want to change the seat.\n You can see all your reservations for this plane in the console.\If you want go to the menu you have to put nothing.");
                userSeat =userSeats.filter(seat=>seat.id  == seatId);
            }
            console.clear();
            if(seatId==""){
                return false;
            }
            let seatCode = prompt("Please what seat do you want to change.\n You have the seats on the console the not disponible seats are like this '[12F]' ");
            while(!comprobarAsiento(seatCode,seats,planeNumber)){
                let seatCode = prompt("Please what seat do you want to change.\n You have the seats on the console the not disponible seats are like this '[12F]' ");
            }
            if(seatCode!=""){
                user[0].changeSeat(seatId,seatCode);
            }
        }
    }
};

const menu = (dato=null,passengers=0,objects=[],planeNumber=1,seats=[]) =>{
    
    if(dato==null)
     return menu(prompt("----------Welcome to ultimate airlines services-----------\n What do you want?\n 1º Press 1 to buy tickets.\n 2º Press 2 to fly the plane\n 3º Press 3 for show all the passengers.\n 4º Press 4 to change your seat\n 5ºPress 5 to exit."),passengers,objects,planeNumber,seats);
    if(dato==1){
        login(null,objects,passengers,planeNumber,seats);
        return menu(null,passengers++,objects,planeNumber,seats);
    }else if(dato==2){
            makePlaneFly(passengers,objects,planeNumber++,seats);
    }else if(dato==3){
        if(objects.length==0)
            prompt("To show passengers you need add someone to the flight first.");
        else{
            console.log('Passengers:');
            console.log(JSON.stringify(objects));
            console.log('Reservations:');
            console.log(JSON.stringify(seats));
            prompt("See all the passengers and the reservations in the console")
            console.clear();
        }
        return menu(null,passengers,objects,planeNumber,seats);
    }else if(dato==4){
        if(objects.length==0)
            prompt("Not users registered");
        else{
            let name = prompt("What is your name");
            let password = prompt("What is your password");
            let user = objects.filter(user => user.name==name&&password==user.password);
            if(user[0]!=undefined)
                changeSeat(null,0,user[0].id,objects,passengers,planeNumber,seats);
            else
                prompt("Not exist users with this caracteristics");
        }
        return menu(null,passengers,objects,planeNumber,seats);

    
    }else if(dato == 5)
        return true;
    else
        return menu(prompt("YOU DIDN'T PRESS 1, 2, 3, 4 OR 5\n----------Welcome to ultimate airlines services-----------\n What do you want?\n 1º Press 1 to add passenger.\n 2º Press 2 to fly the plane\n 3º Press 3 for show the passengers.\n 4ºPress 4 to exit."),passengers,objects,planeNumber,seats);
    
};
menu();

