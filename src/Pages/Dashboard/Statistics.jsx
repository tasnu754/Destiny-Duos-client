import { useQuery } from "@tanstack/react-query";
import { getCountBiodatas } from "../../APIs/biodatas";
import { PieChart, Pie, Cell, Legend} from "recharts";
import { Tooltip } from "@material-tailwind/react";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${value}`}
    </text>
  );
};



const Statistics = () => {

     const { data: countBiodatas = [], } = useQuery({
       queryKey: ["count"],
       queryFn: () => getCountBiodatas(),
     });
    
    const totalBiodata = countBiodatas.totalBiodatasCount;
    const maleBiodatas = countBiodatas.maleBiodatasCount;
    const femaleBiodata = countBiodatas.femaleBiodatasCount;
    const premiumBiodata = countBiodatas.premiumBiodataCount;
    const totalRevenue = countBiodatas.totalRevenue;
    const data = [
      { name: "Total Biodatas", value: totalBiodata },
      { name: "Male Biodatas", value: maleBiodatas },
      { name: "Female Biodatas", value: femaleBiodata },
      { name: "Premium Biodatas", value: premiumBiodata },
      { name: "Total Revenue", value: totalRevenue },
    ];


    // const data = [totalBiodata, maleBiodatas, femaleBiodata, premiumBiodata, totalRevenue];
    

    return (
      <div>
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <PieChart className="mx-auto border-2" width={800} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend></Legend>
        </PieChart>
        {/* </ResponsiveContainer> */}
      </div>
    );
};

export default Statistics;