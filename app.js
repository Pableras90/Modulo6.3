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
        array1[i].timetable = [];
        for (var j = 0; j < array2.length; j++) {
            array1[i].timetable.push(array2[j] + (array1[i].availability[j] ? " SI" : " NO"));
        }
    }
    return array1;
}

function generarAleatorio(team) {
    for (prop in team) {
        for (var i = 0; i < team[prop].availability.length; i++) {
            var aleatorio = Math.floor(Math.random() * 2);
            team[prop].availability[i] = aleatorio != 0;
            
        }
    }
}




function buscarLibre(team, timetable) {
    var find = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < team.length; i++) {
        for (var j = 0; j < timetable.length; j++) {
            if (team[i].availability[j]) {
                find[j] += 1;
                if (find[j] ===team.length) {
                    console.log("Este horario esta libre ", team[i].timetable[j]);
                }
            }
        }
    }
    return team;
}

generarAleatorio(myTeam);
recorreArray(myTeam, WORK_HOURS);
console.log(buscarLibre(myTeam, WORK_HOURS));











