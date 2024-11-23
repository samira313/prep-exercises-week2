

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