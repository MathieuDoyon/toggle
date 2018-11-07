import restify from "restify";
import { createToggle } from "@mathdoy/toggle";
import toggleRestifyMiddleware from "@mathdoy/toggle-restify";
import hello from "./handlers/hello";

const toggle = createToggle({
  prefix: "X-FEAT-",
  features: {
    food: false,
  },
});
// or use default
// const toggle = createToggle();

const server = restify.createServer();
server.use(toggleRestifyMiddleware(toggle));
server.get("/hello/:name", hello);
server.head("/hello/:name", hello);

server.listen(8080, function() {
  console.log("%s listening at %s", server.name, server.url); // eslint-disable-line no-console
});
