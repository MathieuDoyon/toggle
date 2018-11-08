<h1 align="center">
  Toggle
</h1>

<p align="center">
Toggle is a library used to turn on and off feature flags
</p>

## Packages
This repository is a monorepo that we manage using [Lerna](https://github.com/lerna/lerna) and yarn. [Several packages](/packages) are published to npm from the same codebase, including:

| Package         | Version     | Description    |
| --------------- | ----------- | -------------- |
| [toggle](/packages/toggle)          | [![npm](https://img.shields.io/npm/v/@mathdoy/toggle.svg?style=flat-square)](https://www.npmjs.com/package/@mathdoy/toggle)       | Toggle core library |
| [toggle-react](/packages/toggle-react)    | [![npm](https://img.shields.io/npm/v/@mathdoy/toggle-react.svg?style=flat-square)](https://www.npmjs.com/package/@mathdoy/toggle-react)       | React binder |
| [toggle-restify](/packages/toggle-restify) | [![npm](https://img.shields.io/npm/v/@mathdoy/toggle-restify.svg?style=flat-square)](https://www.npmjs.com/package/@mathdoy/toggle-restify)        | Restify middleware |



## Development

- [Install](#install)
- [Available Scripts](#available-scripts)
- [Running examples](#running-examples)
- [watching](#watching)


### Install

```bash
make install
```

### Available Scripts
```bash
make help
build                          compile ES6 files to JS
doc                            compile doc as html and launch doc web server
install                        install dependencies
lint                           lint the code and check coding conventions
prettier                       prettify the source code using prettier
run-react                      run the react example
run-restify                    run the restify example
watch-react                    watch toggle react module
watch-restify                  watch toggle restify module
watch                          watch toggle module
```

### Running examples

```bash
make run-react
# or
make run-restify
```

### watching
```bash
make watch
```

