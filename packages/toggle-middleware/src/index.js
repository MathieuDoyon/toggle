import cloneDeep from "lodash.clonedeep";

export default function toggleRestifyMiddleware(toggle) {
  return (req, res, next) => {
    const requestToggle = cloneDeep(toggle);

    (Object.keys(req.headers) || []).forEach(header => {
      if (header.toLowerCase().startsWith(requestToggle.prefix.toLowerCase())) {
        requestToggle.register(header, req.headers[header]);
      }
    });

    req.toggle = requestToggle;

    next();
  };
}
