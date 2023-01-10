var total = () => parseFloat(document.getElementById("total").value);
var entrega = () => parseFloat(document.getElementById("entrega").value);
document.getElementById("calcular").addEventListener("click", ()=>recorreArray(cash));

var cash = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]

var restValue = () => parseFloat((entrega() - total()));


function recorreArray(array) {
    var  cashChange = restValue();
    var money = [];
    while (cashChange !==0){
        for (var i = 0; i < array.length; i++) {
            if (array[i] <= cashChange) {
                cashChange = Number((cashChange-array[i]).toFixed(2));
                money.push(array[i]);
            }
        }
    }
    console.log(money)
};
