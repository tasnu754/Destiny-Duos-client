import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Shared/Container/Container";
import BiodataSingle from "../../Components/BiodataSingle/BiodataSingle";
import { useState } from "react";
import { getFilteredBiodatas } from "../../APIs/biodatas";


const Biodatas = () => {
  const AllBiodatas = useLoaderData();
  const [biodatas, setbiodatas] = useState(AllBiodatas);
  const [selectedType, setSelectedType] = useState('');
  const [selectedDiv, setSelectedDiv] = useState('');



  const handleSelectType = async(e) => {
    setSelectedType(e.target.value);
    const data = await getFilteredBiodatas("type", e.target.value);
    setbiodatas(data);

 
  }
  const handleSelectDiv = async(e) => {
    setSelectedDiv(e.target.value);
   
      const data = await getFilteredBiodatas("divison", e.target.value);
      setbiodatas(data);

  }

    return (
      <Container>
        <div className="md:grid grid-cols-7">
          <div className=" col-span-1 border-b-2 border-yellow-700 md:border-b-0 md:border-r-2 md:min-h-screen">
            <h2 className="text-2xl font-bold py-4">Filter By</h2>
            <div className="flex flex-col gap-6 w-full">

              <div className="relative h-10 w-72 ">
                <select
                  value={selectedType}
                  onChange={handleSelectType}
                  className="peer h-full w-[60%] rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-black  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                >
                  <option>Type</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="relative h-10 w-72 ">
                <select
                  value={selectedDiv}
                  onChange={handleSelectDiv}
                  className="peer h-full w-[60%] rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                >
                  <option value="">Divison</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattagram">Chattagram</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Maymansign">Maymansign</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {biodatas.map((biodata, i) => (
              <BiodataSingle key={i} biodata={biodata}></BiodataSingle>
            ))}
          </div>
        </div>
      </Container>
    );
};

export default Biodatas;