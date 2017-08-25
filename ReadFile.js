fs = require('fs')
xpath = require('xpath')
  , dom = require('xmldom').DOMParser
parse = require('xml-parser');
  

function BikeRoute() {
    var plainText = fs.readFileSync('ForestPark.txt','utf8');
    var arrayOfText = plainText.toString().split(" ");
    var lat = [];
    var lon = [];
    for (i in arrayOfText) {
        if (arrayOfText[i].startsWith("lat")){
            parseFloat(lat.push(arrayOfText[i].split("lat=\"").pop().slice(0, -1)));
        }
        if (arrayOfText[i].startsWith("lon")){
            parseFloat(lon.push(arrayOfText[i].split("lon=\"").pop().slice(0, -3)));
        }
    }
    var end = []
    for (var i = 0; i < lat.length; i++) {
        end.push([parseFloat(lat[i]),parseFloat(lon[i])]);
    }
    return end;
}

var czech = BikeRoute();
console.log(czech);

var file = fs.createWriteStream('array.txt');
file.on('error', function(err) { /* error handling */ });
czech.forEach(function(v) { file.write(v.join(', ') + '\n'); });
file.end();


var filename = 'output.txt';
var str = JSON.stringify(czech, null, 1);

fs.writeFile(filename, str, function(err){
    if(err) {
        console.log(err)
    } else {
        console.log('File written!');
    }
});




//     function doSomething (callback) {
//     // any async callback invokes callback with response
// }

// doSomething (function doSomethingAfter(err, result) {
//     // process the async result
// });