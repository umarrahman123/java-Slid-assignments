 // Selecting elements
 const decreaseBtn = document.getElementById('decreaseBtn');
 const resetBtn = document.getElementById('resetBtn');
 const increaseBtn = document.getElementById('increaseBtn');
 const countSpan = document.getElementById('count');

 // Initial count value
 let count = 0;

 // Function to update count value and display
 function updateCount() {
     countSpan.textContent = count;
 }

 // Event listeners for buttons
 decreaseBtn.addEventListener('click', () => {
     count--;
     
     updateCount();
 });

 resetBtn.addEventListener('click', () => {
     count = 0;
     updateCount();
 });

 increaseBtn.addEventListener('click', () => {
     count++;
     updateCount();
 });
 function updateCount() {
    // Update count value
    countSpan.textContent = count;

    // Set color based on count value
    if (count < 0) {
        countSpan.style.color = 'red'; // Decrease number is red
    } else if (count === 0) {
        countSpan.style.color = 'blue'; // Reset number is black
    } else {
        countSpan.style.color = 'green'; // Increase number is green
    }
}
