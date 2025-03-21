const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFutureHereDataValid = (data) => {
  // проверяем массив на наличие длины и соответствие типу "массив"
  const arrayLength = isArrayHasLength(data);

  if (!arrayLength)
    throw new Error("Переданные данные - не массив или длина массива = 0");

  // пробегаем по массиву, ищем null, undefined и отсутствующие аттрибуты
  data.forEach((obj) => isObjectHasProps(obj, ["title", "description"]));
};

module.exports = isFutureHereDataValid;
