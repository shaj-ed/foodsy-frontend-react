import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";
import { TrendingCarousel } from "./TrendingCarousel";

const TrendingFoods = () => {
  return (
    <SectionContainer>
      <SectionHeading headline="Trending" />
      <TrendingCarousel />
    </SectionContainer>
  );
};

export default TrendingFoods;
