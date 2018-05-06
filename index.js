function produceDrivingRange(range){
  return function(start,end){
    let startBlock = parseInt(start);
    let endBlock = parseInt(end);
    let distance = Math.abs(endBlock-startBlock);
    let difference = range - distance;

    if(difference > 0){
      return `within range by ${difference}`
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }


  }
}


function produceTipCalculator(percentage){
  return function(ride){
    return ride*percentage;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
