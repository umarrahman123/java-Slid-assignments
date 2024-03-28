// Car object
const car = {
    make: "Carola",
    model: "japani",
    color: ["blue", "green", "white"],
    year: [2020, 2022, 2024],
    hybrid: true,
    // Method to drive the car
    drive: function() {
      console.log("The car is being driven.");
    },
    // Method to start the car
    start: function() {
      console.log("The car has started.");
      // Log with random tax
      console.log("Tax: $" + (Math.random() * 1000).toFixed(9));
    }
  };
  
  // Logging make
  console.log("Make: " + car.make);
  
  // Logging first color
  console.log("First Color: " + car.color[2]);

  //logging year
  console.log("first lounch year: " + car.year[2]);
  
  // Driving the car
  car.drive();
  
  // Starting the car
  car.start();
  