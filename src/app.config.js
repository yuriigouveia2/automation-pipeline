const modules = () => {
  window.$ = window.jquery = require('jquery');
  window.popper = require('popper.js');
  require('bootstrap');
  const appRoot = process.cwd();
}

module.exports = {
  modules
}