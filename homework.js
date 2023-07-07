'use strict';

function BinarioADecimal(numeroBinario) {
  var numeroDecimal = 0;
  var longitud = numeroBinario.length;
  
  for (var i = 0; i < longitud; i++) {
    var digito = parseInt(numeroBinario.charAt(i));
    var posicion = longitud - i - 1;
    var valor = digito * Math.pow(2, posicion);
    numeroDecimal += valor;
  }
  
  return numeroDecimal;
}

var numeroBinario = '1100';
var resultadoDecimal = BinarioADecimal(numeroBinario);

console.log('El número binario', numeroBinario, 'en decimal es:', resultadoDecimal);


    function DecimalABinario(numeroDecimal) {
      var numeroBinario = '';
      
      while (numeroDecimal > 0) {
        var residuo = numeroDecimal % 2;
        numeroBinario = residuo + numeroBinario;
        numeroDecimal = Math.floor(numeroDecimal / 2);
      }
      
      return numeroBinario;
    }
    
    console.log(DecimalABinario(8)); // Output: '1000'
  
module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
