const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFutureHereDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["logoData", "menuData", "buttonsData"]);

  const { logoData, menuData, buttonsData } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(logoData, ["alt", "src", "href"]);

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(menuData);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  menuData.forEach((item) => isObjectHasProps(item, ["title", "href"]));

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(buttonsData);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  buttonsData.forEach((button) =>
    isObjectHasProps(button, ["title", "href", "isPrimary"])
  );
};

module.exports = isFutureHereDataValid;
