<<<<<<< HEAD
"use strict";
const trafficLight = {
     state: "green",
    };
    let rotations = 0;
    while (rotations < 2) {
         const currentState = trafficLight.state;
          console.log("The traffic light is on", currentState); 
          if (currentState === "green") { trafficLight.state = "orange"; 

          } else if (currentState === "orange") { trafficLight.state ="red";

           } else if (currentState === "red") { trafficLight.state = "green"; 
            rotations++;
        }
    }
=======
<<<<<<< HEAD


const trafficLight = {
    state : "green",
};
let rotation = 0;
while (rotation < 2) {
    const currentState = trafficLight.state;
    console.log('The traffic light is on' , currentState);

if ( currentState === "green") {
    trafficLight.state ="orange";

}
else if (currentState === "orange") {
    trafficLight.state = "red";

}
else if (currentState === "red" ) { 
    trafficLight.state = "green";
    rotation++;
}
}
=======
"use strict";

const trafficlight = { 
    possibleStates : [ "green", "orange", "red"],
    stateIndex :0,
};
let cycle = 0;
function updateTrafficLight() {
    const currentState = trafficlight.possibleStates[trafficlight.stateIndex];
    const trafficLightElement = document.getElementById("traffic-light");
    trafficLightElement.textContent = `The traffic light is on ${currentState}`;
    trafficLightElement.className = "";
    trafficLightElement.classList.add(currentState);

    if (currentState === "green") {
        trafficlight.stateIndex = 1;

    }
  else if(currentState === "orange") {
    trafficlight.stateIndex = 2;

  }
  else if(currentState === "red") {
    trafficlight.stateIndex = 0;
    cycle++;
  }

  if (cycle < 3) {
    setTimeout(updateTrafficLight, 1000);

  }
  else {
    trafficLightElement.textContent = "Traffic light simulation compeleted." ;
  }
}

updateTrafficLight();
>>>>>>> b987df2f4c8db54a74d1891800145beeb914ddd9
>>>>>>> 4962306562d66c7d1bfa5370afbaac74f10f9f50
