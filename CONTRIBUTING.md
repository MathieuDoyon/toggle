## Contributing

Pull requests are welcome. You must follow the coding style of the existing files (based on [prettier](https://github.com/prettier/prettier)), and include unit tests and documentation. Be prepared for a thorough code review, and be patient for the merge - this is an open-source initiative.

You can run the tests (linting, unit and functional tests) by calling

```sh
make test
```

or

```sh
yarn test
```

<!--
When working on the end to end tests, you can leverage [cypress](https://www.cypress.io/) runner by starting the simple example yourself (`make run-simple`) and starting cypress in another terminal (`make test-e2e-local` or `yarn test-e2e-local`).
-->

If you have coding standards problems, you can fix them automatically using `prettier` by calling

```sh
make prettier
```

or

```sh
yarn prettier
```

<!--
If you want to contribute to the documentation, install [jekyll](https://jekyllrb.com/docs/home/), then call

```sh
make doc
```

or

```sh
yarn doc
```

And then browse to [http://localhost:4000/](http://localhost:4000/)

*Note*: if you have added a section with heading to the docs, you also have to add it to `docs/_layouts/default.html` (the links on the left) manually.
-->


If you are using toggle as a dependency, and if you want to try and hack it, here is the advised process:

```sh
# in myapp
# install toggle from GitHub in another directory
$ cd ..
$ git clone git@github.com:MathieuDoyon/toggle.git && cd toggle && make install
# replace your node_modules/toggle by a symbolic link to the github checkout
$ cd ../myapp
$ npm link ../toggle/packages/toggle
# go back to the checkout, and replace the version of react by the one in your app
$ cd ../toggle
$ npm link ../myapp/node_modules/react
$ make watch
# in another terminal, go back to your app, and start it as usual
$ cd ../myapp
$ npm run
```

for more information see [Toggle development](https://github.com/MathieuDoyon/toggle#development)

**Tip**: If you're on Windows and can't use `make`, try [this Gist](https://gist.github.com/mantis/bb5d9f7d492f86e94341816321500934).
