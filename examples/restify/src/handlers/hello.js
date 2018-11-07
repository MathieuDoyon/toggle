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

export default hello;
