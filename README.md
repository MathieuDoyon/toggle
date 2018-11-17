<h1 align="center">
  Toggle
</h1>

<p align="center">
Toggle is a library used to turn on and off feature flags
<br />
<img src="https://travis-ci.org/MathieuDoyon/toggle.svg?branch=master" />
</p>

## Packages

This repository is a monorepo that we manage using [Lerna](https://github.com/lerna/lerna) and yarn. [Several packages](/packages) are published to npm from the same codebase, including:

| Package                                              | Version                                                                                                                                               | Description                                                                       |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [toggle](/packages/toggle)                           | [![npm](https://img.shields.io/npm/v/@mathdoy/toggle.svg?style=flat-square)](https://www.npmjs.com/package/@mathdoy/toggle)                           | Toggle core library                                                               |
| [toggle-react](/packages/toggle-react)               | [![npm](https://img.shields.io/npm/v/@mathdoy/toggle-react.svg?style=flat-square)](https://www.npmjs.com/package/@mathdoy/toggle-react)               | React binder                                                                      |
| [toggle-querystring](/packages/toggle-querystring)   | [![npm](https://img.shields.io/npm/v/@mathdoy/toggle-querystring.svg?style=flat-square)](https://www.npmjs.com/package/@mathdoy/toggle-querystring)   | Query string utilities use for toggle your feature in your client javascript file |
| [toggle-middleware](/packages/toggle-middleware)     | [![npm](https://img.shields.io/npm/v/@mathdoy/toggle-middleware.svg?style=flat-square)](https://www.npmjs.com/package/@mathdoy/toggle-middleware)     | Server middleware compatible with restify, fastify and express                    |
| [toggle-next-wrapper](/packages/toggle-next-wrapper) | [![npm](https://img.shields.io/npm/v/@mathdoy/toggle-next-wrapper.svg?style=flat-square)](https://www.npmjs.com/package/@mathdoy/toggle-next-wrapper) | Next.js Toggle wrapper                                                            |
| [toggle-restify](/packages/toggle-restify)           | [![npm](https://img.shields.io/npm/v/@mathdoy/toggle-restify.svg?style=flat-square)](https://www.npmjs.com/package/@mathdoy/toggle-restify)           | Restify middleware **(deprecated use @mathdoy/toggle-middleware instead)**        |

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
