import qs from "qs";

export const createToggleQuerystring = ({
  param = "features",
  features = {},
} = {}) => queryString => {
  const parsed = qs.parse(queryString, {
    ignoreQueryPrefix: true,
  });

  features = {
    ...features,
    ...(parsed[param] || {}),
  };

  (Object.keys(features) || []).forEach(feat => {
    features[feat] = String(features[feat]) === "false" ? false : true;
  });

  return features;
};

export default createToggleQuerystring();
