
import  { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getAllBiodatas } from "../../APIs/biodatas";


const ProfileViews = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const biodataData = await getAllBiodatas();

         console.log(biodataData);
           const transformedData = biodataData.map(
             ({ contact_email, views }) => ({
               contact_email,
               views,
             })
           );

           setData(transformedData);
           console.log(data);
       } catch (error) {
         console.error("Error fetching biodata data:", error);
       }
     };

     fetchData();
       }, []);
    
  return (
   
      <BarChart
        width={1400}
        height={700}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="contact_email" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="views"  fill="#8884d8" />
      </BarChart>
   
  );
};

export default ProfileViews;
