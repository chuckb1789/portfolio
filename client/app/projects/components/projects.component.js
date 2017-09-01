const projects = [
  {
    name: 'Bootcampers Collective',
    imageSrc: 'images/bootcamperscollective.png',
    description: 'Founded an organization dedicated to providing recent graduates of coding bootcamps an experiential learning platform where they work on real client projects using production style coding practices and agile methodologies.'
  },
  {
    name: 'WorkTrip',
    imageSrc: 'images/worktrip.png',
    description: 'Contributed to front-end development and UI/UX to improve tax client questions and refined process by saving clients about 5 minutes each by tailoring questionnaires for tax prepartion using primarily jQuery and CSS.'
  },
  {
    name: 'Rowdy Mermaid',
    imageSrc: 'images/rowdymermaid.png',
    description: 'Managed and built the newest version of the Rowdy Mermaid website using component based Angular 1.6, Gulp, Yarn, and Sass.'
  },
  {
    name: 'Project Snowshoe',
    imageSrc: 'images/projectsnowshoe.png',
    description: 'A hobby project of mine that I built for snowshoeing trips in Colorado. It provdes details regarding snow depth, weather, and areas to explore.'
  },
  {
    name: 'Tradist',
    imageSrc: 'images/tradist.png',
    description: 'A hobby project of mine that I build for traditional rock climbing that provides a filtered list of routes in an area by difficulty as well as filtering down to the gear that you have available.'
  }
]

const projectsComponent = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.projects = projects;

        ctrl.$onInit = function () {
        };
    },
    template: `
    <div class='projects-section'>
    <section class='projects-component'>
        <article ng-repeat='project in $ctrl.projects' class='projects'>
          <img class='project-logo' src='{{project.imageSrc}}' />
          <div class='name-description'>
              <h1>{{project.name}}</h1>
              <p>{{project.description}}</p>
          </div>
        </article>
      </section>
    </div>
    `
};

angular.module('portfolio-site.projects')
    .component('projectsComponent', projectsComponent);

projectsComponent.$inject = [];
