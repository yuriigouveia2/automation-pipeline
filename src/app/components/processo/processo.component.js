const shell = require('shelljs');
shell.config.execPath = shell.which('node').toString();

angular.
  module('automation').
  component('processo', { 
    templateUrl: `${__dirname}/src/app/components/processo/processo.view.html`,
    controller: function ProcessoController() {
      this.porta = null;
      this.computadorIcon = path.join(process.cwd(), '/src/assets/icons/computador-100.png');
      this.lupaIcon = path.join(process.cwd(), '/src/assets/icons/lupa-48.png');
      
      this.procuraProcesso = function() {
        if (this.porta) {
          shell.exec(`netstat -ano | findStr :${this.porta}`, (err, data) => {
            console.log(data);
          });
        } else {
          shell.exec(`netstat -ano`);
        }
      }
    }
  });