DoomMetalApp is a project on developing a web app (SPA) for those who are interested in learning more about doom metal/metal music genre(s), listening and sharing their ideas, views, links images etc on non-traditional metal music genres.

DoomMetalApp is supposed to offer users not only the general information about the doom metal music genre(s) via links to either different information or the original bands websites. It offers two-side service to its users: as web portal on visiting its link addresses to learn more and as a SPA enabling users to perform a number of activities in the personal account pages on login.

The part of the project published here provides only the frontend part for the web portal and for logging in. The contents are limited in scope because the full version should be provided only for deployment on the server.

This part of the project is based on using HTML5, CSS3/Bootstrap, LESS Preprocessor, AngularJS (including "angular-ui-router" and "angular-bootstrap"), Karma/Jasmine for unit testing(TDD) and Protractor/Jasmine for end-to-end testing (BDD), GulpJS for the automated development workflow.

The overview of the project files folders included:
 - "app_src/":
   - "app_src/assets/.."(images, fonts),
   - "app_src/css/.." (css files),
   - "app_src/data/.."(.json files with data),
   - "app_src/less/.."(less preprocessor files for samples, css files/minimified files to be used in real-life situation),
   - "app_src/sources":
     - "app_src/sources/.." - app page folders (controllers.js, tmpl.html (templates) files),
     - "app_src/sources/shared_scripts/..." - shared controllers, directives, services for the project,
   - "app_src/index.html"(the main .html file to start the project),
   - "app_src/script.js" (the main .js file where Angular app module is defined);
 - "bower-components": app packages managed with bower (empty folder, the following packages should be installed:"angular", "angular-ui-router", "bootstrap", "jquery", "less");
 - "lib": jasmine library files (empty folder, jasmine-2.5.2/2.5.X/X.X.X library should be installed);
 - "tests": 
   - "tests/E2E tests/.." - end-to-end tests (BDD) for testing web portal navigation ("angular ui-router"), user login/register behaviour (Protractor/Jasmine);
   - "tests/unit_tests/..." - unit-tests(TDD) for testing controllers and directives (Karma/Jasmine);
 - "vendor": app packages managed with bower and used in karma test configuration(empty folder, the following packages should be installed: "angular", "angular-bootstrap", "angular-ui-router", "bootstrap", "jquery", "less");
 - ".bowerrc": .bowerrc file configuration;
 - "bower.json": bower.json file configuration;
 - "gulpfile.js": gulp configuration for automating the development workflow (running tasks on "build"(html, css/less, js, images, fonts), "karma testing", "protractor testing");
 - "karma.conf.js": karma configuration file;
 - "package.json": list of packages installed for this project;
 - "protractor.conf.js": protractor configuration file.

For the "Login" part of the whole project including user authentication and authorization via OAuth 2.0 protocol, visit: https://github.com/Tetyana777/OAuth4DMApp

For the "Login" part of the whole project including user authentication with JSON Web Tokens, visit: https://github.com/Tetyana777/AuthJWT



