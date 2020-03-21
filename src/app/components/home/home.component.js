angular.
  module('automation').
  component('home', {  
      templateUrl: `${__dirname}/src/app/components/home/home.view.html`,
        controller: function HomeController() {
        this.phones = [
            {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
            }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
            }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
            }
        ];
    },
});