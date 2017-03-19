# React Library Starter Kit
Getting tired of setuping your new library environment? Just fork this project and follow the steps.

## Scripts
 - `npm run build`: build your library and generate the Flow files
 - `npm run test`: run the linter and tests
 - `npm run watch`: run tests in watch mode

## What it includes
 - React.js
 - FlowType
 - ESLint
 - Babel
 - Travis CI

## Steps to get started
1. Fork this project
1. Rename the repository with your project name
1. Clone on your computer
1. Open package.json and replace:
     - `$PROJECT_NAME$`
     - `$PROJECT_DESCRIPTION$`
     - `$PROJECT_KEYWORDS$`
     - `$PROJECT_AUTHOR$`
     - `$GIT_URL$`
1. Setup NPM deployment with Travis CI
    - `travis setup npm`
    - See https://docs.travis-ci.com/user/deployment/npm/
1. Commit and you're ready to start your library!
