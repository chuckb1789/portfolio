const portfolioMenuBar = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.menuButtons = [
			{
				name: 'Projects',
				sref: 'app.projects'
			},
			{
				name: 'About',
				sref: 'app.about'
			},
			{
				name: 'Travels',
				sref: 'app.travels'
			},
			{
				name: 'Social',
				sref: 'app.social'
			}
		];

	},
	template: `
		<nav id="menu-bar">
		    <div id="nav-links">
		        <div id="user-links">
		            <portfolio-menu-button data="button" ng-repeat="button in $ctrl.iconButtons">
		        </div>
		        <div id="page-links">
		            <portfolio-menu-button data="button" ng-repeat="button in $ctrl.menuButtons" class="menu-button-style">
		        </div>
		    </div>
		</nav>
	`
};

angular
	.module('portfolio-site.widgets')
	.component('portfolioMenuBar', portfolioMenuBar);
