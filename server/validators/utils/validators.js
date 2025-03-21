// валидатор наличия длины у объекта
const objectLength = (obj) => Object.values(obj).length;

// валиадатор наличия длина у массива
const isArrayHasLength = (arr) => {
  if (Array.isArray(arr) && arr.length === 0) return null;

  return arr.length;
};

// валидатор наличия длины у объекта
const isObjectHasLength = (obj) => {
  if (typeof obj === "object" && objectLength(obj) === 0) return null;

  return objectLength(obj);
};

const isObjectHasProps = (obj, props) => {
  if (!isObjectHasLength(obj))
    throw new Error("Объект не является объектом или это пустой объект");

  if (!isArrayHasLength)
    throw new Error(
      "Параметр props не является массивом или это пустой массив"
    );

  const keys = Object.keys(obj);

  props.forEach((prop) => {
    if (!keys.includes(prop))
      throw new Error(
        `В объекте ${JSON.stringify(
          obj
        )} отсутствует обязательное поле ${JSON.stringify(prop)}`
      );
  });
};

module.exports = {
  isArrayHasLength,
  isObjectHasLength,
  isObjectHasProps,
};
