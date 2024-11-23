"use strict";
const trafficLight = { state:"green",};

let rotations =  0;
while (rotations < 2) { const currentState = trafficLight.state; 
    console.log("The traffic light is on", currentState); 
    if (currentState === "green") { trafficLight.state = "orange";

     } else if (currentState === "orange") { trafficLight.state = "red";

      } else if (currentState === "red") { trafficLight.state = "green";
         rotations++;
<<<<<<< HEAD
         }};
=======
         }}
>>>>>>> ebf0ba4f7fdcbb61142b297d533f4221004d6381
 