const toggle = {
  prefix: "X-FEAT-",
  features: {},

  register(feature, value) {
    this.features[this.getKey(feature)] =
      String(value) === "false" ? false : true;
  },

  unregister(feature) {
    delete this.features[this.getKey(feature)];
  },

  isEnabled(feature) {
    return Boolean(this.features[this.getKey(feature)]);
  },

  getKey(key = "") {
    return this.unmangle(key);
  },

  getHeaderKey(key = "") {
    return this.mangle(key);
  },

  mangle(key = "") {
    return key.length
      ? `${
          this.prefix.toLowerCase() ? this.prefix.toLowerCase() : ""
        }${key.toLowerCase()}`
      : null;
  },

  unmangle(key = "") {
    return key.startsWith(this.prefix.toLowerCase())
      ? key.slice(this.prefix.length)
      : key.toLowerCase();
  },
};

const initFeatures = (features = {}) => {
  const lowercaseFeatures = {};
  Object.keys(features).forEach(feature => {
    lowercaseFeatures[feature.toLowerCase()] = features[feature];
  });

  return lowercaseFeatures;
};

export const createToggle = ({ prefix = "X-FEAT-", features = {} } = {}) => ({
  ...toggle,
  prefix,
  features: initFeatures(features),
});

export default toggle;
