import CounterBiodatas from "../../Components/CounterBiodatas/CounterBiodatas";
import HowWorks from "../../Components/HowWorks/HowWorks";
import PremiumSection from "../../Components/PremiumSection/PremiumSection";
import Slider from "../../Components/Slider/Slider";
import SuccessStory from "../../Components/SuccessStory/SuccessStory";
import Team from "../../Components/Team/Team";



const Home = () => {
    return (
      <div>
        <Slider></Slider>
        <PremiumSection></PremiumSection>
        <HowWorks></HowWorks>
        <Team></Team>
        <CounterBiodatas></CounterBiodatas>
        <SuccessStory></SuccessStory>
      </div>
    );
};

export default Home;