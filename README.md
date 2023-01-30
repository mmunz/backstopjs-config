# backstop-config

This is an opinionated (https://github.com/garris/BackstopJS)[backstopjs] config which allows to test multiple
projects while sharing basic setup. But everything can be overwritten from project configs.

## Requirements

The (backstop.js)[backstop.js] script uses [https://www.npmjs.com/package/minimist](minimist) to parse commandline
arguments. You may install that package globally or create a package.json in this directory. 

## Setup

Create a basic backstopjs config with

```shell
backstop init
```

Then copy the defaults and sites folder and the backstop.js and cookies.json files from this project into your
backstop folder and edit them according to your needs.

## Configuration

## Defaults

Defaults shared between all projects are located in the (defaults)[defaults] folder.

## Sites (Projects)

Indvidual projects/sites are configured in the (sites)[sites] directory. For each project create a folder with the
project id as name and a config.js file inside it.

The values defined in these project level config.js files are merged with the default configs.

See (sites/example/config.js) for more details.

## Executing the backstopjs tests

The --config argument is required.
Also you need to provide the id of a project to test, e.g.

```shell
backstop reference --config=backstop.js --id=example
backstop test --config=backstop.js --id=example
```

