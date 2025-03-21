const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFutureHereDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "whatIsGptTopData",
    "whatIsGptMiddleData",
    "whatIsGptBottomData",
  ]);

  const { whatIsGptTopData, whatIsGptMiddleData, whatIsGptBottomData } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(whatIsGptTopData, ["header", "content"]);

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(whatIsGptMiddleData, ["header", "button"]);

  const { button } = whatIsGptMiddleData;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(button, ["href", "title"]);

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(whatIsGptBottomData);

  whatIsGptBottomData.forEach((item) => {
    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(item, ["header", "content"]);
  });
};

module.exports = isFutureHereDataValid;
