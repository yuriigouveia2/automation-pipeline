angular.
  module('automation').
  component('processo', { 
    templateUrl: `${__dirname}/src/app/components/processo/processo.view.html`,
    controller: function ProcessoController() {
      this.computadorIcon = path.join(process.cwd(), '/src/assets/icons/computador-100.png');
      this.procuraProcesso = function() {
          
      }
    }
   });