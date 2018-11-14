.PHONY: build help

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: package.json ## install dependencies
	@yarn

run: run-restify

run-fastify: ## run the fastify example
	@BABEL_ENV=cjs yarn -s run-fastify

run-restify: ## run the restify example
	@BABEL_ENV=cjs yarn -s run-restify

run-react: ## run the react example
	@BABEL_ENV=cjs yarn -s run-react

watch: ## watch toggle module
	@BABEL_ENV=cjs yarn -s watch

watch-react: ## watch toggle react module
	@BABEL_ENV=cjs yarn -s watch:react

watch-restify: ## watch toggle restify module
	@BABEL_ENV=cjs yarn -s watch:restify

watch-middleware: ## watch toggle middleware module
	@BABEL_ENV=cjs yarn -s watch:middleware

watch-qs: ## watch toggle querystring module
	@BABEL_ENV=cjs yarn -s watch:qs

build: build-toggle build-toggle-react build-toggle-middleware build-toggle-restify build-toggle-qs ## compile ES6 files to JS

build-toggle:
	@echo "Transpiling toggle files...";
	@cd ./packages/toggle && BABEL_ENV=cjs yarn -s build

build-toggle-react:
	@echo "Transpiling toggle-react files...";
	@cd ./packages/toggle-react && BABEL_ENV=cjs yarn -s build

build-toggle-middleware:
	@echo "Transpiling toggle-middleware files...";
	@cd ./packages/toggle-middleware && BABEL_ENV=cjs yarn -s build

build-toggle-restify:
	@echo "Transpiling toggle-restify files...";
	@cd ./packages/toggle-restify && BABEL_ENV=cjs yarn -s build

build-toggle-qs:
	@echo "Transpiling toggle-qs files...";
	@cd ./packages/toggle-querystring && BABEL_ENV=cjs yarn -s build

doc: ## compile doc as html and launch doc web server
	@yarn -s doc

lint: ## lint the code and check coding conventions
	@echo "Running linter..."
	@yarn -s lint 'packages/*/src/**/*.*s'

prettier: ## prettify the source code using prettier
	@echo "Running prettier..."
	@yarn -s prettier

test: build test-unit lint ## launch all tests

# test: build test-unit lint test-e2e ## launch all tests

test: build test-unit lint ## launch all tests

test-unit: ## launch unit tests
	@if [ "$(CI)" != "true" ]; then \
		echo "Running unit tests..."; \
		yarn -s test-unit; \
	fi
	@if [ "$(CI)" = "true" ]; then \
		echo "Running unit tests in CI..."; \
		yarn -s test-unit-ci; \
	fi

test-unit-watch: ## launch unit tests and watch for changes
	yarn -s test-unit --watch

# test-e2e: ## launch end-to-end tests
# 	@if [ "$(build)" != "false" ]; then \
# 		echo 'Building example code (call "make build=false test-e2e" to skip the build)...'; \
# 		cd examples/simple && BABEL_ENV=cjs yarn -s build; \
# 	fi

# 	@NODE_ENV=test cd cypress && yarn -s test


# test-e2e-local: ## launch end-to-end tests for development
# 	@echo 'Starting e2e tests environment. Ensure you started the simple example first (make run-simple)'
# 	@cd cypress && yarn -s start
