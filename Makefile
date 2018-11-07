.PHONY: build help

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: package.json ## install dependencies
	@yarn

run: run-restify

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

build: build-ra-core build-ra-ui-materialui build-react-admin build-ra-data-fakerest build-ra-data-json-server build-ra-data-simple-rest build-ra-data-graphql build-ra-data-graphcool build-ra-data-graphql-simple build-ra-input-rich-text build-ra-realtime build-ra-tree-core build-ra-tree-ui-materialui build-data-generator ## compile ES6 files to JS

doc: ## compile doc as html and launch doc web server
	@yarn -s doc

lint: ## lint the code and check coding conventions
	@echo "Running linter..."
	@yarn -s lint 'packages/*/src/**/*.*s'

prettier: ## prettify the source code using prettier
	@echo "Running prettier..."
	@yarn -s prettier

# test: build test-unit lint test-e2e ## launch all tests

# test-unit: ## launch unit tests
# 	@if [ "$(CI)" != "true" ]; then \
# 		echo "Running unit tests..."; \
# 		yarn -s test-unit; \
# 	fi
# 	@if [ "$(CI)" = "true" ]; then \
# 		echo "Running unit tests in CI..."; \
# 		yarn -s test-unit-ci; \
# 	fi

# test-unit-watch: ## launch unit tests and watch for changes
# 	yarn -s test-unit --watch

# test-e2e: ## launch end-to-end tests
# 	@if [ "$(build)" != "false" ]; then \
# 		echo 'Building example code (call "make build=false test-e2e" to skip the build)...'; \
# 		cd examples/simple && BABEL_ENV=cjs yarn -s build; \
# 	fi

# 	@NODE_ENV=test cd cypress && yarn -s test


# test-e2e-local: ## launch end-to-end tests for development
# 	@echo 'Starting e2e tests environment. Ensure you started the simple example first (make run-simple)'
# 	@cd cypress && yarn -s start
