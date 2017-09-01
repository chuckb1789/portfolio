const headerComponent = {
  bindings: {},
  controller: function() {},
  template: `
    <div class="container-menu">
      <portfolio-menu-bar></portolio-menu-bar>
    </div>
  `,
};

angular
  .module('portfolio-site.layout')
  .component('headerComponent', headerComponent);

headerComponent.$inject = [];
