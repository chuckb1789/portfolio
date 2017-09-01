function menuBar() {
  const directive = {
    link: link,
    restrict: 'EA',
    template: `
      <nav id="menu-bar">
        <div id="nav-logo">
          <a ui-sref="app.home"><img src="images/rowdyMermaidWordyLogo.png" alt="Rowdy Mermaid Logo"></a>
        </div>
        <div id="nav-links">
          <div id="user-links">
            <portfolio-menu-button data="{{button}}" ng-repeat="button in iconButtons">
          </div>
          <div id="page-links">
            <portfolio-menu-button data="{{button}}" ng-repeat="button in menuButtons">
          </div>
        </div>
      </nav>
    `,
  };
  return directive;

  function link(scope, element, attrs) {
    scope.menuButtons = [
      {
        name: 'Projects',
        sref: 'app.projects'
      },
      {
        name: 'About',
        sref: 'app.about',
      },
      {
        name: 'Travels',
        sref: 'app.travels',
      },
      {
        name: 'Social',
        sref: 'app.social',
      }
    ];
  }
}

angular
  .module('portfolio-site.widgets')
  .directive('menuBar', menuBar);
