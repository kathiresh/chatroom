**Project Setup**

# Installation

_You need to have [NodeJS](http://nodejs.org/) Version 6.3.0_

_Type below commands in terminal_

```
npm install -g gulp

npm install -g bower

sudo npm install

bower install
```

**Finally**

_Type below command in terminal_

```
gulp
```

**Application Directory Structure**

```
├── app
│   ├── assets
|   |   └── css
|   |   └── fonts
|   |   └── images
|   |   └── scss
│   ├── scripts
│   │   └── application-scripts
│   └── index.html
├── build
│   └── build-files
├── task
│   └── gulp-task-files
├── bower_components
├── node_modules
├── package.json
├── gulpfile.js
├── bower.json
├── .bowerrc
├── .jshintignore
├── .jshintrc
├── .sass-lint.config
├── .gitattributes
└── .gitignore
```

**Quick Commands**

**Gulp** _Run gulp task in development mode_

```
gulp
```

**Gulp** _Run gulp task in production mode_

```
gulp prod
```
