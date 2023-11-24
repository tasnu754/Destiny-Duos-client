import { Button } from "@material-tailwind/react";
import Container from "../Shared/Container/Container";

const HowWorks = () => {
    return (
      <Container>
        <div className="py-20 ">
          <h2 className="text-2xl md:text-5xl font-bold text-center">
            How it Works!
          </h2>
          <div className="grid lg:grid-cols-2 gap-14">
            <div className="lg:w-[50%] mx-auto h-[400px]  p-4">
              <img
                className="object-cover h-full"
                src="https://i.ibb.co/vzjDWNM/20824341-6368592.jpg"
                alt=""
              />
              <div className="flex gap-2 items-center mt-4">
                <div className="w-10 h-10 overflow-hidden rounded-full rounded-s-none">
                  <Button className="btn1 object-cover flex justify-center items-center">
                    1
                  </Button>
                </div>
                <p className="text-xl md:text-2xl font-bold">Signup</p>
              </div>
            </div>
            <div className="lg:w-[50%] mx-auto h-[400px]  p-4">
              <img
                className="object-cover h-full"
                src="https://i.ibb.co/r5xkW9h/12083050-Wavy-Bus-01-Single-02.jpg"
                alt=""
              />
              <div className="flex gap-2 items-center mt-4">
                <div className="w-10 h-10 overflow-hidden rounded-full rounded-s-none">
                  <Button className="btn1 object-cover flex justify-center items-center">
                    2
                  </Button>
                </div>
                <p className="text-xl md:text-2xl font-bold">Create Profile</p>
              </div>
            </div>
            <div className="lg:w-[50%] mx-auto h-[400px] p-4">
              <img
                className="object-cover h-full"
                src="https://i.ibb.co/fCV4hW1/5257489-52234.jpg"
                alt=""
              />
              <div className="flex gap-2 items-center mt-4">
                <div className="w-10 h-10 overflow-hidden rounded-full rounded-s-none">
                  <Button className="btn1 object-cover flex justify-center items-center">
                    3
                  </Button>
                </div>
                <p className="text-xl md:text-2xl font-bold">
                  See Other Biodatas
                </p>
              </div>
            </div>
            <div className="lg:w-[50%] mx-auto h-[400px] p-4">
              <img
                className="object-cover h-full"
                src="https://i.ibb.co/vzjDWNM/20824341-6368592.jpg"
                alt=""
              />
              <div className="flex gap-2 items-center mt-4">
                <div className="w-10 h-10 overflow-hidden rounded-full rounded-s-none">
                  <Button className="btn1 object-cover flex justify-center items-center">
                    4
                  </Button>
                </div>
                <p className="text-xl md:text-2xl font-bold">Contact</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default HowWorks;