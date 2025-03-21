const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFutureHereDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "header",
    "description",
    "heroCtaButtons",
    "illustration",
  ]);

  const { heroCtaButtons, illustration } = data;

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(heroCtaButtons);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  heroCtaButtons.forEach((item) => isObjectHasProps(item, ["title", "type"]));

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(illustration, ["alt", "src"]);
};

module.exports = isFutureHereDataValid;
