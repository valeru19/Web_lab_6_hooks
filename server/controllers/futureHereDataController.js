const isFutureHereDataValid = require("../validators/isFutureHereDataValid");

const {
  getFutureHereDataModel,
  postFutureHereDataModel,
} = require("../model/files/futureHereDataModel");

const getFutureHereData = (req, res, next) => {
  try {
    const data = getFutureHereDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postFutureHereData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isFutureHereDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postFutureHereDataModel(data);

    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getFutureHereData, postFutureHereData };
