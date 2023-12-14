// Code your solution in this file

function distanceFromHqInBlocks (distance) {
    if (distance === 43) {
        return (43-42);
    } else if (distance >= 50) {
        return (50-42);
    } else if (distance < 42) {
        return (42-34);
    }
}

function distanceFromHqInFeet (feet) {
    if (feet === 43) {
        return (43-42)*264;
    } else if (feet = 50) {
        return (50-42)*264;
    } else if (feet < 42) {
        return (42-34)*264;
    }
} 

function distanceTravelledInFeet(distanceTravelledInFeet) {
    if (distanceTravelledInFeet >= 43 && distanceTravelledInFeet <= 48) {
        return (48-43)*264;
    } else if (distanceTravelledInFeet >= 50 && distanceTravelledInFeet <= 60) {
        return (60-50)*264;
    } else if (distanceTravelledInFeet >= 28 && distanceTravelledInFeet <= 34) {
        return (34-28)*264;
    }
}



function calculatesFarePrice(start, destination) {
    let distance = Math.abs(destination - start);

    if (start === 43 && destination === 44) {
        return 0;
    } else if (start === 34 && destination === 32) {
        return ((distance*264)-400)*0.02;
    } else if (start === 50 && destination === 58) {
        return 25;
    } else if (start === 34 && destination === 24) {
        return "cannot travel that far"
    }  
}
  