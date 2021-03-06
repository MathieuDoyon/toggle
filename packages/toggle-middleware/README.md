<h1 align="center">
  Toggle Middleware
</h1>

<p align="center">
Toggle Middleware library for <a href="https://github.com/MathieuDoyon/toggle">toggle</a><br />
`toggle-middleware` middleware read request headers sent and overwrite default values.
</p>

## Installation

```bash
$ npm install --save @mathdoy/toggle @mathdoy/toggle-middleware
```

```javascript
import restify from "restify";
import { createToggle } from "@mathdoy/toggle";
import toggleMiddleware from "@mathdoy/toggle-middlware";

const toggle = createToggle({
  prefix: "X-FEAT-",
  features: {
    food: false,
  },
});
// or use default
// const toggle = createToggle();

// You can manually send `x-feat-food: true` header to overwrite the config and test your feature

const hello = (req, res, next) => {
  const response = {
    reqToggleFeatures: req.toggle.features,
    hello: "hello handler",
    name: req.params.name,
    isFooEnabled: req.toggle.isEnabled("foo"),
    isFoodEnabled: req.toggle.isEnabled("food"),
  };

  res.send(response);
  next();
};

const server = restify.createServer();
server.use(toggleMiddleware(toggle));
server.get("/hello/:name", hello);
server.head("/hello/:name", hello);

server.listen(8080, function() {
  console.log("%s listening at %s", server.name, server.url); // eslint-disable-line no-console
});
```

## For more information on toggle

For more information on toggle see [toggle](https://github.com/MathieuDoyon/toggle/tree/master/packages/toggle)

# Using it with react

```bash
$ npm install --save @mathdoy/toggle @mathdoy/toggle-react
```

See more information for [toggle-react](https://github.com/MathieuDoyon/toggle/tree/master/packages/toggle-react)

## License

Toggle is licensed under the [MIT License](https://github.com/MathieuDoyon/toggle/blob/master/LICENSE.md).
