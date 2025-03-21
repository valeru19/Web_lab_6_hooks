const isBrandsDataValid = require("../validators/isBrandsDataValid");

const {
  getBrandsDataModel,
  postBrandsDataModel,
} = require("../model/files/brandsDataModel");

const getBrandsData = (req, res, next) => {
  try {
    const data = getBrandsDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postBrandsData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isBrandsDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postBrandsDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getBrandsData, postBrandsData };
