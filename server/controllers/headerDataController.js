const isHeaderDataValid = require("../validators/isHeaderDataValid");

const {
  getHeaderDataModel,
  postHeaderDataModel,
} = require("../model/files/headerDataModel");

const getHeaderData = (req, res, next) => {
  try {
    const data = getHeaderDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postHeaderData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isHeaderDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postHeaderDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getHeaderData, postHeaderData };
