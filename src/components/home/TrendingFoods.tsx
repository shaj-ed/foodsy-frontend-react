import SectionContainer from "../common/section/SectionContainer";
import SectionHeading from "../common/section/SectionHeading";
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
