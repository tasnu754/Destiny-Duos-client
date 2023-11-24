import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Shared/Container/Container";
import BiodataSingle from "../../Components/BiodataSingle/BiodataSingle";

const Biodatas = () => {
    const biodatas = useLoaderData();

    return (
      <Container>
        <div className="md:grid grid-cols-7 ">
          <div className=" col-span-1 border-b-2 border-yellow-700 md:border-b-0 md:border-r-2 md:min-h-screen">Filter section</div>
          <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {
                        biodatas.map((biodata , i) =><BiodataSingle key={i} biodata={biodata}></BiodataSingle>)
            }
          </div>
        </div>
      </Container>
    );
};

export default Biodatas;