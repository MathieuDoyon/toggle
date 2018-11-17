import { createToggle } from "@mathdoy/toggle";

const toggle = createToggle({
  prefix: "X-FEAT-",
  features: {
    foo: false,
  },
});

export default toggle;
