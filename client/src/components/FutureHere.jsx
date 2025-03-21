import useData from "../hooks/useData";
import futureHereData from "../mockData/futureHereData";

import Preloader from "./Preloader";

export const RightContainerTemplate = ({ item }) => {
  const { title, description } = item;

  return (
    <div className="right__container">
      <h3 className="container__header lined_header">{title}</h3>
      <p className="container__content">{description}</p>
    </div>
  );
};

const FutureHere = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "future-here",
    options: {
      method: "GET",
    },
  });

  if (isError) {
    console.log("error");
    console.log(error);
  }

  // if (!isLoading) {
  //   console.log("!isLoading");
  //   console.log("data");
  //   console.log(data);
  // }

  if (isLoading) return <Preloader />;
  const renderedData = data || futureHereData;

  return (
    <>
      <div className="future_here__left">
        <h2 className="left__header">
          Будущее Уже Наступило и Тебе Нужно Лишь Осознать. Шагни в Будущее и
          Воплоти Его.
        </h2>
        <a href="/" className="left__cta">
          Запросить ранний доступ
        </a>
      </div>
      <div className="future_here__right">
        {renderedData.map((item, index) => (
          <RightContainerTemplate key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default FutureHere;
