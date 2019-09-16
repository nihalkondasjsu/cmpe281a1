function randomAccident(){
  return {
      "time": ""+new Date().getTime(),
      "car" : randomCar(),
      "license" : randomLicense(),
      "location" : randomCity()
  };  
};

function randomCar(){
    var carsDB = require('./db/carsDB.json');
    
    var myArray = Object.keys(carsDB);
    
    var rand = myArray[Math.floor(Math.random() * myArray.length)];

    return rand+" "+carsDB[rand][Math.floor(Math.random() * carsDB[rand].length)];
};

function randomCity(){
    var citiesDB = require('./db/citiesDB.json');
    
    var myArray = Object.keys(citiesDB);
    
    var rand = myArray[Math.floor(Math.random() * myArray.length)];

    return citiesDB[rand];
};

function randomLicense(){
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var numbers = "0123456789".split('');
    
    var result = "" ;
    
    for(var i=0;i<3;i++){
        result += arrayRandomValue(alphabets);    
    }
    result += " " ;
    for(var i=0;i<4;i++){
        result += arrayRandomValue(numbers);    
    }
    
    return result;
};

function arrayRandomValue(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)];
};

//module.exports.randomCar = randomCar ;
//module.exports.randomCity = randomCity ;
//module.exports.randomLicense = randomLicense ;
module.exports.randomAccident = randomAccident ;
