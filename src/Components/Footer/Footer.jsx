import { Typography } from "@material-tailwind/react";
import Container from "../Shared/Container/Container";
 import { GiEngagementRing } from "react-icons/gi";

const Footer = () => {
    return (
      <div>
        <footer className="w-full bg-gray-700  p-8 ">
          <Container>
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-700 text-center md:justify-between ">
              <div className="flex justify-center items-center gap-2 font-bold lg:text-2xl">
                <GiEngagementRing className="text-5xl text-yellow-700"></GiEngagementRing>
                <p className=" text-cyan-700 text-3xl"> Destiny Duos</p>
              </div>
              <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 text-xl">
                <li>
                  <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    className="font-normal transition-colors hover:text-blue-500 text-white "
                  >
                    About Us
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    className="font-normal transition-colors hover:text-blue-500 text-white"
                  >
                    License
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    className="font-normal transition-colors hover:text-blue-500 text-white"
                  >
                    Contribute
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    className="font-normal transition-colors hover:text-blue-500 text-white"
                  >
                    Contact Us
                  </Typography>
                </li>
              </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography
              color="blue-gray"
              className="text-center font-normal text-white"
            >
              &copy; 2023 copyrights
            </Typography>
          </Container>
        </footer>
      </div>
    );
};

export default Footer;