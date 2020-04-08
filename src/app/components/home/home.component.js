const path = require('path');

angular.
  module('automation').
  component('home', {  
      templateUrl: `${__dirname}/src/app/components/home/home.view.html`,
        controller: function HomeController() {
            this.terminalIcon = path.join(process.cwd(), '/src/assets/icons/terminal-48.png');

            this.eventClick = function() {
              const element = document.getElementById('card-processos');
              element.classList.add('scale-down-center');

              setTimeout(() => {
                const processosElement = document.getElementById('processos');
                const sidebarElement = document.getElementById('sidebar');
                const processoElement = document.getElementById('processo-content');

                processosElement.classList.add('small');
                sidebarElement.classList.add('scale-up-center');
                sidebarElement.classList.remove('small');

                processoElement.classList.remove('small');
                processoElement.classList.add('scale-up-center');
              }, 750);
            }
    },
});
