import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Rating,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { getAllSuccessStory } from "../../APIs/successStory";
import Container from "../Shared/Container/Container";

const SuccessStory = () => {
    const { data: marriages=[]} = useQuery({
      queryKey: ["success story"],
      queryFn: () => getAllSuccessStory(),
    });
  return (
    <Container>
      <h2 className="text-5xl text-center font-bold text-yellow-800 pt-10">
        Success Marriage Stories
      </h2>
      <div className="lg:grid grid-cols-2 gap-4 lg:pl-48 pt-4">
        {marriages.map((marriage, i) => (
          <Card
            key={i}
            color="transparent"
            shadow={false}
            className="w-full max-w-[26rem] "
          >
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar size="lg" variant="circular" src={marriage?.imgurl} />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    Marriage on <br />
                    {marriage.marriageDate}
                  </Typography>
                  <div className="flex items-center mt-2.5 mb-5">
                    <Rating readonly value={parseInt(marriage?.reveiw)} />

                    <span className="bg-blue-100 text-[#53346D] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#53346D] ml-3">
                      {marriage?.reveiw}.0
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography> {marriage?.story}</Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default SuccessStory;
