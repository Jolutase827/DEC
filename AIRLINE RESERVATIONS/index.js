class Reservation{
    id;
    planeNumber;
    seatCode;
    moneyCost;
    nameOfThePerson;
    passport;
    
    constructor(planeNumber,seatCode,moneyCost,nameOfThePerson,passport){
        this.planeNumber=planeNumber;
        this.seatCode = seatCode;
        this.moneyCost = moneyCost;
        this.nameOfThePerson = nameOfThePerson;
        this.passport = passport;
        this.id = planeNumber+""+seatCode
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

    addSeat(reservations){
        reservations.forEach(seat => {
            this.money += seat.moneyCost;
            this.reservations.push(seat);
        });
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
    objects.push(new Passenger(passengers,name,password));
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
                buyTickets(user.id,objects,passengers,planeNumber,seats);
            }else{
                prompt("Not exist users with this caracteristics");
                return login(null,objects,passengers,planeNumber,seats);
            }
        }
   }else if(dato==2){
        createUser(objects,passengers);
        return login(null,objects,passengers,planeNumber,seats);
   }else if(dato==3)
       return false;
   else
       return login(prompt("YOU DIDN'T PRESS 1, 2 or 3\n----------Menu-----------\n Are you log in?\n 1º Press 1 if yes.\n 2º Press 2 if no\n 3º Press 3 to go to menu."),objects,passengers,planeNumber,seats);
};

const menu = (dato=null,passengers=0,objects=[],planeNumber=1,seats=[]) =>{
    
    if(dato==null)
     return menu(prompt("----------Welcome to ultimate airlines services-----------\n What do you want?\n 1º Press 1 to buy tickets.\n 2º Press 2 to fly the plane\n 3º Press 3 for show all the passengers.\n 4ºPress 4 to exit."),passengers,objects,planeNumber,seats);
    if(dato==1){
        login(null,objects,passengers,planeNumber,seats);
        return menu(null,passengers++,objects,planeNumber,seats);
    }else if(dato==2){
        makePlaneFly();
        return menu(null,passengers,objects,planeNumber++,seats);

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
    }
    else if(dato == 4)
        return true;
    else
        return menu(prompt("YOU DIDN'T PRESS 1, 2, 3 OR 4\n----------Welcome to ultimate airlines services-----------\n What do you want?\n 1º Press 1 to add passenger.\n 2º Press 2 to fly the plane\n 3º Press 3 for show the passengers.\n 4ºPress 4 to exit."),passengers,objects,planeNumber,seats);
    
};
menu();

