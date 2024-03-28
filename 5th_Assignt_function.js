
function caculaterTotal(subTotal,discound){
    return subTotal - discound;
}


var order1 = caculaterTotal(150,25)
var order2 = caculaterTotal(250,80)
var order3 = caculaterTotal(350,35)

console.log(order1, "order 1")
console.log(order2, "order 2")
console.log(order3, "order 3")



console.log(`one pizza is of ${order1} ropies and its total amount is after discound is 
${caculaterTotal(order1,10 )}`);

console.log(`one pizza is of ${order2} and its total amount is incloding tax is 
${caculaterTotal(order2,30)}`);

console.log(`one pizza is of ${order3} and its total amount is incloding tax is 
${caculaterTotal(order3,40)}`);





