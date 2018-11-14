import { createToggle } from "./toggle";
import assert from "assert";

describe("Toggle core", () => {
  it("Should create toggle", () => {
    const features = {
      food: true,
    };

    const toggle = createToggle({
      prefix: "X-FEAT-",
      features,
    });

    assert.deepEqual(toggle.features, features);
  });

  it("Should get feature without case sensitive", () => {
    const features = {
      fooD: true,
    };

    const toggle = createToggle({
      prefix: "X-FEAT-",
      features,
    });

    assert.equal(toggle.isEnabled("FOOD"), true);
    assert.equal(toggle.isEnabled("fOOd"), true);
  });

  it("Should register FOO feature", () => {
    const toggle = createToggle();

    toggle.register("foo", true);
    assert.equal(toggle.isEnabled("foo"), true);
  });

  it("Should unregister feature", () => {
    const features = {
      food: true,
    };

    const toggle = createToggle({
      features,
    });

    assert.equal(toggle.isEnabled("FOOD"), true);

    toggle.unregister("food");

    assert.equal(toggle.isEnabled("fOOd"), false);
  });
});
