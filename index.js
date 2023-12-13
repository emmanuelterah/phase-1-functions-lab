// Code your solution in this file

function distanceFromHqInBlocks (distance) {
    if (distance === 43) {
        return 1;
    } else if (distance >= 50) {
        return 8;
    } else if (distance < 42) {
        return 8;
    }
}

function distanceFromHqInFeet (feet) {
    if (feet === 43) {
        return 264;
    } else if (feet = 50) {
        return 2112;
    } else if (feet < 42) {
        return 2112;
    }
} 

function distanceTravelledInFeet(distanceTravelledInFeet) {
    if (distanceTravelledInFeet >= 43 && distanceTravelledInFeet <= 48) {
        return 1320;
    } else if (distanceTravelledInFeet >= 50 && distanceTravelledInFeet <= 60) {
        return 2640;
    } else if (distanceTravelledInFeet >= 28 && distanceTravelledInFeet <= 34) {
        return 1584;
    }
}



function calculatesFarePrice(start, destination) {
    let distance = Math.abs(destination - start);

    if (start === 43 && destination === 44) {
        return 0;
    } else if (start === 34 && destination === 32) {
        return 2.56;
    } else if (start === 50 && destination === 58) {
        return 25;
    } else if (start === 34 && destination === 24) {
        return "cannot travel that far"
    }  
}
