    function esPrimo(numero) {
      if (numero <= 1) {
        return false;
      }
      
      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      
      return true;
    }
    
    function generarListaPrimos(cantidad) {
      var listaPrimos = [];
      var numero = 2;
      
      while (listaPrimos.length < cantidad) {
        if (esPrimo(numero)) {
          listaPrimos.push(numero);
        }
        numero++;
      }
      
      return listaPrimos;
    }
    
    function mostrarPrimos() {
      var resultadoDiv = document.getElementById("resultado");
      var listaPrimos = generarListaPrimos(1000);
      var resultadoHTML = "";
      
      for (var i = 0; i < listaPrimos.length; i++) {
        var primo = listaPrimos[i];
        resultadoHTML += "<span class='";
        
        if (esPrimo(primo)) {
          resultadoHTML += "primo";
        } else {
          resultadoHTML += "no-primo";
        }
        
        resultadoHTML += "'>" + primo + "</span><br>";
      }
      
      resultadoDiv.innerHTML = resultadoHTML;
    }
    
    mostrarPrimos();