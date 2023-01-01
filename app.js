var myArray = new Array(3).fill("Hola");


var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];







function recorreArray(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
        array1[i].propierty = [];
        for (var j = 0; j < array2.length; j++) {
            array1[i].propierty[j] = array2[j];
        }
        
    }
    return array1;
}
console.log(recorreArray(myTeam, WORK_HOURS));

for (prop in myTeam) {
    var aleatorio = Math.floor(Math.random() * 2);
    var disponibilidad = myTeam[prop].availability;
    for (var i = 0; i < myTeam.length; i++) {
        disponibilidad = aleatorio != 0 ? true : false;
    }

    console.log(disponibilidad);

}






/*function recorreDisponibilidad() {

    for (var i = 0; i < myTeam.length; i++) {
        var disponibilidad = myTeam[i].availability;
        console.log(disponibilidad);

    }
}*/



/*var fillArray = (team, work) => {
    for (var i = 0; i < myTeam.length; i++) {
      myTeam[i].schedule = [];
      for (var j = 0; j < WORK_HOURS.length; j++) {
        myTeam[i].schedule[j] = WORK_HOURS[j]
      }
    }
    return console.log(team)
     }
  fillArray(myTeam, WORK_HOURS);*/