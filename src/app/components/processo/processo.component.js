const shell = require('shelljs');
shell.config.execPath = shell.which('node').toString();

angular.
  module('automation')
  .component('processo', { 
    templateUrl: `${__dirname}/src/app/components/processo/processo.view.html`,
  })
  .controller('processoCtrl', ($scope, $rootScope) => {
      $scope.porta = null;
      $scope.processos = [];
      $scope.computadorIcon = path.join(process.cwd(), '/src/assets/icons/computador-100.png');
      $scope.lupaIcon = path.join(process.cwd(), '/src/assets/icons/lupa-48.png');
      
      $scope.procuraProcesso = function() {
        let lista = [];
        if ($scope.porta) {
          shell.exec(`netstat -ano | findStr :${$scope.porta} | findStr "LISTENING"`, {silent: true},(err, data) => {
            if (err) {
              console.log(err);
              return;
            }

            lista = [...getProcessosData(data.trim(), $scope.porta)];
            $scope.processos = lista;
            $scope.$apply();
          });
        } 
      }
  });

  getProcessosData = function(data, porta) {
    let processos = [];
    let filtered = data.replace('\n', '').split(" ").filter(x => !!x);

    for (let i = 0; i < filtered.length; i += 5 ) {
      processos.push({
        protocolo       : filtered[i],
        enderecoLocal   : filtered[i+1],
        enderecoExterno : filtered[i+2],
        estado          : filtered[i+3],
        pid             : filtered[i+4]
      })
    }

    return processos.filter(processo => processo.enderecoLocal.includes(porta));
  }