INF134 Final Project

******Setting up Workspace******

1. Some of the packages/libraries depend on newer versions of Node JS. Check what version of Node JS you have installed with "node --version". If you installed Node JS before, make sure you've updated to at least 10 or downloading the latest version from the node website (https://nodejs.org/en/)

2. To run the Ionic app, you will need to install Ionic through npm. To do this, you will install the Ionic Command Line Interface (CLI) globally with "npm install -g ionic". The Ionic project is already set up in the sleeptracker folder, but the CLI is necessary to run the project.

3. You may want to install Cordova as well, as it's useful for some optional features: "npm install -g cordova"

4. You will also need to install the dependencies for the Ionic app. These dependencies are defined in each project's respective package.json files. cd into the sleeptracker folder and install the dependencies with "npm install".

*******Running the App********

To run the Ionic app, cd into the sleeptracker folder and run "ionic lab". This will start the app at localhost:8200. "ionic serve" will also run the app in the browser, but lab is recommended because Ionic will then replicate what the app would look like on iOS and Android. Be sure the dependencies have been installed first via "npm install".

Any code changes will be automatically reloaded.
