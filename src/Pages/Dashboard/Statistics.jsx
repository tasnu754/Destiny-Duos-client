import { useQuery } from "@tanstack/react-query";
import { getCountBiodatas } from "../../APIs/biodatas";

const Statistics = () => {

     const { data: countBiodatas = [], isLoading } = useQuery({
       queryKey: ["count"],
       queryFn: () => getCountBiodatas(),
     });
    
    const totalBiodata = countBiodatas.totalBiodatasCount;
    const maleBiodatas = countBiodatas.maleBiodatasCount;
    const femaleBiodata = countBiodatas.femaleBiodatasCount;
    const premiumBiodata = countBiodatas.premiumBiodataCount;
    const totalRevenue = countBiodatas.totalRevenue;
    
    return <div>{countBiodatas.totalBiodatasCount}</div>;
};

export default Statistics;