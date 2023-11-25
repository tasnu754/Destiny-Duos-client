import CounterBiodatas from "../../Components/CounterBiodatas/CounterBiodatas";
import HowWorks from "../../Components/HowWorks/HowWorks";
import MarriagesCards from "../../Components/MarriagesCard/MarriagesCards";
import PremiumSection from "../../Components/PremiumSection/PremiumSection";
import Slider from "../../Components/Slider/Slider";



const Home = () => {
    return (
      <div>
        <Slider></Slider>
        <PremiumSection></PremiumSection>
        <HowWorks></HowWorks>
        <CounterBiodatas></CounterBiodatas>
        <MarriagesCards></MarriagesCards>
      </div>
    );
};

export default Home;