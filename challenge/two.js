//function to determine the speed 
function checkSpeed(speed) {
    const speedLimit=70; //Speed Limit
    const kmPerDemeritPoint = 5; //1 demerit point for every 5km/sabove the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        //calculate number of demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    
        //suspend demerit points greater than 12
        if (demeritPoints > 12) {
            console.log("license suspended");
        } else {
            //print the number of demerits 
            console.log("Points: " + demeritPoints);
        }
    }
}
checkSpeed(50);
checkSpeed(100);
checkSpeed(60);

