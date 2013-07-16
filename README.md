# Battlefy Boogle Challenge

Boggle Challenge

Boggle is a word game designed by Allan Turoff, and trademarked by Parker Brothers, a division of Hasbro. The game is played using a plastic grid of lettered dice, in which players attempt to find words in sequences of adjacent letters.


## Rules

The game begins with sixteen letters that sit on a 4x4 grid. A three-minute timer is started.

## Features

There are four features we would like to see implemented
* Generate Randomized Boggle Board
* Enter a word that I found
* Points system
* Timer


### Generate Boggle Board

As a Player, I want to create a new Boggle board to play.

Requirements
* English letters only
* “Qu” must be together



### Enter a word that I found

As a Player, I want to enter a word that I found.

Requirements
* Make sure the user can’t enter the same word twice
* If the words does not exist, display an error message


### Points System

As a Player, I want to see how many points I got for a word.
As a Player, I want to see how many total points for this board.


Word length    Points
3, 4           1
5              2
6              3
7              5
8+             11


### Timer

As a Player, I want to find as many words as I can limited by time.

Requirements:
* 2 minutes


### End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows
you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

Check out the
[end-to-end runner's documentation](http://docs.angularjs.org/guide/dev_guide.e2e-testing) for more
info.

* create your end-to-end tests in `test/e2e/scenarios.js`
* serve your project directory with your http/backend server or node.js + `scripts/web-server.js`
* to run do one of:
  * open `http://localhost:port/test/e2e/runner.html` in your browser
  * run the tests from console with [Karma](http://karma-runner.github.io) via
    `scripts/e2e-test.sh` or `script/e2e-test.bat`
