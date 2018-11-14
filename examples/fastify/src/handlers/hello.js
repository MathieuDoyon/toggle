const hello = (request, res) => {
  const { req } = request;
  const response = {
    reqToggleFeatures: req.toggle.features,
    hello: "hello handler",
    name: request.params.name,
    isFooEnabled: req.toggle.isEnabled("foo"),
    isFoodEnabled: req.toggle.isEnabled("food"),
  };

  res.send(response);
};

export default hello;
