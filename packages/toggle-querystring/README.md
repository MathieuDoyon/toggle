<h1 align="center">
  Toggle Query String
</h1>

<p align="center">
Toggle Restify library for <a href="https://github.com/MathieuDoyon/toggle">toggle</a>
</p>

## Installation

```bash
$ npm install --save @mathdoy/toggle @mathdoy/toggle-querystring
```

```javascript
import { createToggle } from "@mathdoy/toggle";
import { createToggleQuerystring } from "@mathdoy/toggle-querystring";

// ...

const toggleQuerystring = createToggleQuerystring({
  // Query string parameter
  param: "features",
  // Default features
  features: {
    logo: true,
  },
});

const toggle = createToggle({
  features: toggleQuerystring(window.location.search),
});

// toggleQuerystring("?features[foo]=1&features[bar]&features[qaz]=false")
// {
//     logo: true,
//     foo: true,
//     bar: true,
//     qaz: false
// }

// toggleQuerystring("?features[logo]=false")
// { logo: false } // default has been overriden
```

See a full example in [toggle/blob/master/examples/react/src/index.js](https://github.com/MathieuDoyon/toggle/blob/master/examples/react/src/index.js)

## For more information on toggle
For more information on toggle see [toggle](https://github.com/MathieuDoyon/toggle/tree/master/packages/toggle)

# Using it with react

```bash
$ npm install --save @mathdoy/toggle @mathdoy/toggle-querystring @mathdoy/toggle-react
```

See more information for [toggle-react](https://github.com/MathieuDoyon/toggle/tree/master/packages/toggle-react)

## License

Toggle is licensed under the [MIT License](https://github.com/MathieuDoyon/toggle/blob/master/LICENSE.md).
