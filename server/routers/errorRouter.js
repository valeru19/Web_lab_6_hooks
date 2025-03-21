const errorRouter = require("express").Router();

errorRouter.route("*").all((req, res, next) => {
  res.status(404).json({
    error: "Нет такого метода или маршрута",
  });
});

module.exports = errorRouter;
