const friutes = ['apple','orrang','mango','anaar','keeno']
console.log(friutes);
//add from end
friutes.push('malta');
console.log(friutes);

//add from start
friutes.unshift('graps');
console.log(friutes);

//remove from start
friutes.shift();
console.log(friutes);

//remove from end
friutes.pop();
console.log(friutes);

//slice (startIndexNum, endElementNum)---> use for copy
const newFrutes = friutes.slice(3, 5);
console.log(newFrutes);

//splice (startIndexNum, removeElement, 'arg')--> use for replacement or change older array
friutes.splice(2, 3, 'amrood');
console.log(friutes);

console.log(friutes)


        var x = 10;
        function foo() {
        var x = 30; 
        console.log(x);}
        foo();