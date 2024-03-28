// var friutes = ['apple', 'orange', 'mango', 'banana', 'tarbooz']
// var firstFruite = "apple"
// var lastItem = "tarbooz"
// console.log(firstFruite);
// console.log(lastItem);

// console.log(friutes+"\n" +firstFruite + " " + lastItem);


// Step 1: Create a "fruits" array and store some fruit values
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Step 2: Setup the last item as a number (random)
fruits[fruits.length - 1] = Math.floor(Math.random() * 100); // Assuming you want a random number between 0 and 99

// Step 3: Assign the first fruit to the variable
let firstFruit = fruits[0];

// Step 4: Re-assign the last array item to the actual fruit
fruits[fruits.length - 1] = 'watermelon'; // Example fruit, you can replace it with any other fruit

// Step 5: Log both the first fruit variable and the entire fruits array
console.log("First fruit:", firstFruit);
console.log("Entire fruits array:", fruits);
