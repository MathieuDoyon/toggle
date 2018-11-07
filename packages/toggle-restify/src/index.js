import cloneDeep from "lodash.clonedeep";

export default function toggleRestifyMiddleware(toggle) {
  return (req, res, next) => {
    // make toggle available per request
    const requestToggle = cloneDeep(toggle);

    (Object.keys(req.headers) || []).forEach(header => {
      if (header.toLowerCase().startsWith(requestToggle.prefix.toLowerCase())) {
        requestToggle.register(header, req.header(header));
      }
    });

    req.toggle = requestToggle;

    next();
  };
}
