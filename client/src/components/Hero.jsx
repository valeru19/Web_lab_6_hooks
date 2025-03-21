import { heroData } from "../mockData/heroData";

import useData from "../hooks/useData";
import Preloader from "./Preloader";

export const Header = ({ header }) => {
  return <h1 className="left__header">{header}</h1>;
};

export const Description = ({ description }) => {
  return <p className="left__description">{description}</p>;
};

export const Button = ({ ctaButton: { type, title } }) => {
  switch (type) {
    case "input":
      return <input type="text" placeholder={title} />;

    case "button":
      return (
        <button className="cta_buttons__signin btn primary-btn">{title}</button>
      );

    default:
      return null;
  }
};

export const Buttons = ({ ctaButtons }) => {
  return (
    <div className="left__cta_buttons">
      {ctaButtons.map((ctaButton, index) => (
        <Button key={index} ctaButton={ctaButton} />
      ))}
    </div>
  );
};

export const Illustration = ({ illustration }) => {
  const { alt, src } = illustration;

  return <img src={src} alt={alt} />;
};

const Hero = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "hero",
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
  const renderedData = data || heroData;
  const { header, description, illustration, heroCtaButtons } = renderedData;

  return (
    <>
      <div className="hero_section__left">
        <Header header={header} />
        <Description description={description} />
        <Buttons ctaButtons={heroCtaButtons} />
      </div>
      <div className="hero_section__right">
        <Illustration illustration={illustration} />
      </div>
    </>
  );
};

export default Hero;
