import useData from "../hooks/useData";
import whatIsGptData from "../mockData/whatIsGptData";
import Preloader from "./Preloader";

export const WhatIsGptTop = ({ whatIsGptTopData: { header, content } }) => {
  return (
    <>
      <h3 className="top__header lined_header">{header}</h3>
      <p className="top__content">{content}</p>
    </>
  );
};

export const WhatIsGptMiddle = ({ whatIsGptMiddleData }) => {
  const {
    header,
    button: { href, title },
  } = whatIsGptMiddleData;

  return (
    <>
      <h2 className="middle__header">{header}</h2>
      <a href={href} className="middle_cta">
        {title}
      </a>
    </>
  );
};

export const WhatIsGptContainer = ({ item }) => {
  const { header, content } = item;
  return (
    <div className="bottom__container">
      <h3 className="container__header lined_header">{header}</h3>
      <p className="container__content">{content}</p>
    </div>
  );
};

export const WhatIsGptBottom = ({ whatIsGptBottomData }) => {
  return whatIsGptBottomData.map((item, index) => (
    <WhatIsGptContainer key={index} item={item} />
  ));
};

const WhatIsChatGpt = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "what-is-gpt",
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
  const renderedData = data || whatIsGptData;
  const { whatIsGptTopData, whatIsGptMiddleData, whatIsGptBottomData } =
    renderedData;

  return (
    <>
      <div className="what_is_chatgpt_section__top">
        <WhatIsGptTop whatIsGptTopData={whatIsGptTopData} />
      </div>
      <div className="what_is_chatgpt_section__middle">
        <WhatIsGptMiddle whatIsGptMiddleData={whatIsGptMiddleData} />
      </div>
      <div className="what_is_chatgpt_section__bottom">
        <WhatIsGptBottom whatIsGptBottomData={whatIsGptBottomData} />
      </div>
    </>
  );
};

export default WhatIsChatGpt;
