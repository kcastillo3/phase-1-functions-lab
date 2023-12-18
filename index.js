function distanceFromHqInBlocks(someValue) {
    // Scuber's headquarters is at 42nd Street
    // So, we subtract 42 from the pickup location to get the distance in blocks
    let distance = someValue - 42;
    
    // If the distance is below 0, return the absolute value as it's not possible to travel below 42nd Street
    if (distance < 0) {
     return Math.abs(distance);
    }
    
    return distance;
   }
   
   function distanceFromHqInFeet(someValue) {
    // Call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // The return value of distanceFromHqInBlocks can then be used to calculate feet
    let distanceInBlocks = distanceFromHqInBlocks(someValue);
    
    // Each block in Manhattan is 264 feet long
    return distanceInBlocks * 264;
   }
   
   function distanceTravelledInFeet(start, destination) {
    // The distance travelled is the difference between the destination and start blocks
    let distanceTravelledInBlocks = Math.abs(destination - start);
    
    // Each block in Manhattan is 264 feet long
    return distanceTravelledInBlocks * 264;
   }
   
   function calculatesFarePrice(start, destination) {
    // The fare is calculated based on the distance travelled in feet
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    
    if (distanceTravelled > 2500) {
     return 'cannot travel that far';
    } else if (distanceTravelled <= 400) {
     return 0; // First 400 feet are free
    } else if (distanceTravelled <= 2000) {
     return (distanceTravelled - 400) * 0.02; // 2 cents per foot for distances between 400 and 2000 feet
    } else {
     return 25; // 25 dollars for distances over 2000 feet
    }
   }