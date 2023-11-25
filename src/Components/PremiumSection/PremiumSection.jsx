import {  Spinner } from "@material-tailwind/react";
import { getFilteredBiodatas } from "../../APIs/biodatas";
import { useQuery } from "@tanstack/react-query";
import BiodataSingle from "../BiodataSingle/BiodataSingle";
import Container from "../Shared/Container/Container";

const PremiumSection = () => {

     const { data:premiumDatas=[], isLoading  } = useQuery({
       queryKey: ["premium"],
       queryFn: () => getFilteredBiodatas("role", "Premium")
     });
    
    if (isLoading) {
        return <Spinner className="h-16 w-16 text-gray-900/50" />;
    }

    return (
      <Container>
        <h2 className="text-5xl text-center font-bold text-yellow-900 py-10">Premuim Members</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {premiumDatas.slice(0,6).map((premiumData) => (
            <BiodataSingle
              key={premiumData._id}
              biodata={premiumData}
            ></BiodataSingle>
          ))}
        </div>
      </Container>
    );
};

export default PremiumSection;