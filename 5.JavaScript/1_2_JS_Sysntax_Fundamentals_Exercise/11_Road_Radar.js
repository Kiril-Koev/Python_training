function RoadRadar(speed,area){

    let areas = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let status = 0
    
    if(Number(speed)<=Number(areas[area])){
        console.log(`Driving ${speed} km/h in a ${areas[area]} zone`);
    }else if(Number(speed)>Number(areas[area]) && Number(speed)<=Number(areas[area]+20)){
        status = 'speeding'
        console.log(`The speed is ${Number(speed) - Number(areas[area])} km/h faster than the allowed speed of ${areas[area]} - ${status}`);
    }else if(Number(speed)>Number(areas[area]) && Number(speed)<=Number(areas[area]+40)){
        status = 'excessive speeding'
        console.log(`The speed is ${Number(speed) - Number(areas[area])} km/h faster than the allowed speed of ${areas[area]} - ${status}`);
    }else if(Number(speed)>Number(areas[area]+40)){
        status = 'reckless driving'
        console.log(`The speed is ${Number(speed) - Number(areas[area])} km/h faster than the allowed speed of ${areas[area]} - ${status}`);
    }

}

// RoadRadar(21, 'residential')