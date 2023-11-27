import { useQuery } from "@tanstack/react-query";
import { getCountBiodatas } from "../../APIs/biodatas";
import { Spinner } from "@material-tailwind/react";
import Container from "../Shared/Container/Container";

const CounterBiodatas = () => {
     const { data: countBiodatas = [], isLoading } = useQuery({
       queryKey: ["count"],
       queryFn: () => getCountBiodatas(),
     });
    
    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-10">
          <Spinner className="h-16 w-16 text-gray-900/50 " />
        </div>
      );
    }


    return (
      <Container>
        <h2 className="text-5xl text-center font-bold text-yellow-800 py-10">
          Number of Biodatas
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 pb-6">
          <div className="color text-white p-10 rounded-lg text-center md:text-3xl w-[70%] lg:w-[50%] mx-auto">
            <h3>Total Biodatas</h3>
            <p>{countBiodatas.totalBiodatasCount}</p>
          </div>
          <div className="color text-white p-10 rounded-lg text-center md:text-3xl w-[70%] lg:w-[50%] mx-auto">
            <h3>Male Biodatas</h3>
            <p>{countBiodatas.maleBiodatasCount}</p>
          </div>
          <div className="color text-white p-10 rounded-lg text-center md:text-3xl w-[70%] lg:w-[50%] mx-auto">
            <h3>Female Biodatas</h3>
            <p>{countBiodatas.femaleBiodatasCount}</p>
          </div>
          <div className="color text-white p-10 rounded-lg text-center md:text-3xl w-[70%] lg:w-[50%] mx-auto">
            <h3>Marriages Done</h3>
            <p>{countBiodatas.successStoryCount}</p>
          </div>
        </div>
      </Container>
    );
};

export default CounterBiodatas;