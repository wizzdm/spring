# React Library Starter Kit
[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm.svg)
[![Build Status](https://travis-ci.org/wizzdm/spring.svg?branch=master)](https://travis-ci.org/wizzdm/spring)

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
1. Create your project on GitHub
1. Copy this project
    - git clone https://github.com/reactivestack/react-library-starterkit.git
    - mv react-library-starterkit YOUR-PROJECT-NAME
    - cd your-project-name
    - git remote set-url origin YOUR-REPO-URL
    - git push origin master
1. Open package.json and find & replace:
   - `PROJECT_NAME`
   - `$PROJECT_DESCRIPTION$`
   - `$PROJECT_KEYWORDS$`
   - `$PROJECT_AUTHOR$`
   - `$GIT_URL$`
1. Setup NPM deployment with Travis CI
   - `travis setup npm`
   - See https://docs.travis-ci.com/user/deployment/npm/
1. Set the badge URL in the readme
1. Rewrite this readme
1. Commit and you're ready to start your library!
