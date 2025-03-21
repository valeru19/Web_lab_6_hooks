import useData from "../hooks/useData";
import brandsData from "../mockData/brandsData";

import Preloader from "./Preloader";

export const BrandsImage = ({ brand: { alt, src } }) => (
  <img className="brands_section__img" src={src} alt={alt} />
);

export const BrandsTemplate = ({ brandsData }) =>
  brandsData?.map((brand, index) => <BrandsImage key={index} brand={brand} />);

const Brands = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "brands",
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
  const renderedData = data || brandsData;

  return <BrandsTemplate brandsData={renderedData} />;
};

export default Brands;
