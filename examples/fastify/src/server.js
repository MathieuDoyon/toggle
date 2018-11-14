import Fastify from "fastify";
import { createToggle } from "@mathdoy/toggle";
import toggleMiddleware from "@mathdoy/toggle-middleware";
import hello from "./handlers/hello";

const toggle = createToggle({
  prefix: "X-FEAT-",
  features: {
    food: false,
  },
});
// or use default
// const toggle = createToggle();

const fastify = Fastify({ logger: { level: "error" } });

// Declare a route
fastify.use(toggleMiddleware(toggle));
fastify.get("/hello/:name", hello);

// Run the server!
fastify.listen(8081, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
