angular.
  module('automation').
  component('sidebar', {  
      templateUrl: `${__dirname}/src/app/components/sidebar/sidebar.view.html`,
      controller: function HomeController() {
            this.homeIcon = path.join(process.cwd(), '/src/assets/icons/home-40.png');
            this.terminalIcon = path.join(process.cwd(), '/src/assets/icons/terminal-48.png');

            this.homeClick = function() {

              const element = document.getElementById('card-processos');
              const sidebarElement = document.getElementById('sidebar');
              
              element.classList.remove('scale-down-center');
              sidebarElement.classList.remove('scale-up-center');
              sidebarElement.classList.add('scale-down-center');

              hideComponent();

              setTimeout(() => {
                const processosElement = document.getElementById('processos');                
                processosElement.classList.remove('small');
                element.classList.add('scale-up-center');       
                sidebarElement.classList.add('small');
              }, 750);
            }
      },
});
hideComponent = function() {
  const element = document.getElementsByClassName('scale-up-center');
  
  if(element['processo-content']) {
    const processosElement = element['processo-content'];
    processosElement.classList.remove('scale-up-center');
    processosElement.classList.add('scale-down-center', 'small');
  }

}