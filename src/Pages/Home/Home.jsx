import CounterBiodatas from "../../Components/CounterBiodatas/CounterBiodatas";
import HowWorks from "../../Components/HowWorks/HowWorks";
import PremiumSection from "../../Components/PremiumSection/PremiumSection";
import Slider from "../../Components/Slider/Slider";
import SuccessStory from "../../Components/SuccessStory/SuccessStory";



const Home = () => {
    return (
      <div>
        <Slider></Slider>
        <PremiumSection></PremiumSection>
        <HowWorks></HowWorks>
        <CounterBiodatas></CounterBiodatas>
        <SuccessStory></SuccessStory>
      </div>
    );
};

export default Home;