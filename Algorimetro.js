var fs=require('fs');
var Algoritmo='./QuickSort'

var Algoritmos=
fs.readdirSync(Algoritmo);

console.log(Algoritmos);

Algoritmos.forEach(function(file){
    console.log(Algoritmo+'/'+file)
    let fn = require(Algoritmo+'/'+file);
}
)