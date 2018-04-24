var database = require('./databaseSocket');
var datetime = require('node-datetime');
var ref = database.getRef();
var db = getTotaldb();


function getTotaldb (){
    ref.on("value", function(snapshot) {
        db = snapshot.val();
        return db;
    });
}

function getCurrentData(data) {
    var respond = dataTextParser(data);
    var currentForecast = {};
    currentForecast.last_updated_epoch = data.current.last_updated_epoch;
    currentForecast.temp_c = data.current.temp_c;
    currentForecast.last_updated = data.current.last_updated;
    console.log(saveData(currentForecast));
    return respond;


}

function dataTextParser(data) {
    var maxAndMinTemperature = getMaxAndMinTemperature();
    var respond = "";
    respond += "La temperatura en grados celsius de la ciudad de Buenos Aires corresponde a: ";
    respond += data.current.temp_c;
    respond += " cuenta con una humedad del ";
    respond += data.current.humidity;
    respond += "% y la condicion del dia es ";
    respond += data.current.condition.text;
    respond += " la maxima corresponde a: ";
    respond += maxAndMinTemperature.max;
    respond += " y una temperatura minima de: ";
    respond += maxAndMinTemperature.min;
    return respond;
}

function getMaxAndMinTemperature(){
    var registers = db;
    var oneDayAgoEpoch = datetime.create().epoch() - 86400000;
    var currentMaxAndMin = {};
    currentMaxAndMin.max = 0;
    currentMaxAndMin.min = 0;
    for(var i in registers) {
        if (currentMaxAndMin.max == 0) {
            currentMaxAndMin.max = registers[i].temp_c;
            currentMaxAndMin.min = registers[i].temp_c;
        } else if (registers[i].temp_c > currentMaxAndMin.max && registers[i].last_updated_epoch >= oneDayAgoEpoch)
            currentMaxAndMin.max = registers[i].temp_c;
        else if (registers[i].temp_c < currentMaxAndMin.min && registers[i].last_updated_epoch >= oneDayAgoEpoch)
            currentMaxAndMin.min = registers[i].temp_c;
    }
    return currentMaxAndMin;
}

function saveData(currentForecats){
    return ref.push(currentForecats).key;
}

module.exports = {
    getDB: function () {
        return db;
    },
    getCurrentForecast: function (data) {
        return getCurrentData(data);
    }
    
};




