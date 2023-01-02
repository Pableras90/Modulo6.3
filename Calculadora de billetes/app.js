var total = () => parseInt(document.getElementById("total").value);
var entrega = () => parseInt(document.getElementById("entrega").value);
document.getElementById("calcular").addEventListener("click", recorreArray);

var cambio = [200, 100, 50, 20, 10, 5]

var restValue = () => parseInt((entrega() - total()));
console.log(restValue())


function recorreArray(array) {
    var billetes = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i]>=restValue()) {
            billetes += array[i];
        }
    }
    console.log(billetes)
}

recorreArray(cambio);