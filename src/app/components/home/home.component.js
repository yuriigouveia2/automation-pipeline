const path = require('path');

angular.
  module('automation').
  component('home', {  
      templateUrl: `${__dirname}/src/app/components/home/home.view.html`,
        controller: function HomeController() {
            this.path = path.join(process.cwd(), '/src/assets/img/logo.png')
    },
});