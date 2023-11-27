import Swal from "sweetalert2";
import { addSuccessStroy } from "../../APIs/userDashboeard";
import { imgURL } from "../../APIs/utils";
import useAuth from "../../Hooks/useAuth";

const MarriegeForm = () => {
    const { user } = useAuth();
    const handleSubmit=async(e) => {
       e.preventDefault();
       const form = e.target;
       
        const selfId = form.yourId.value;
        const partnerId = form.partnerId.value;
        const marriageDate = form.date.value;
        const reveiw = form.rating.value;
        const story = form.story.value;
        const image = form.image.files[0];

        try {
            const imgurlData = await imgURL(image);
            const imgurl = imgurlData.data.display_url;
            
            const successStory = {
              imgurl,
              selfId,
              partnerId,
              marriageDate,
              reveiw,
              story,
              userEmail: user.email
            };

            await addSuccessStroy(successStory);
            form.reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
      

        } catch (err) {
            console.log(err);
        }
      

    }
    return (
      <div>
        <section className="bg-white ] dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-5xl font-bold text-[#53346D] dark:text-white text-center">
              Marriage Details
            </h2>
            <form onSubmit={handleSubmit} action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
               
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                     Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Image"
                    required
                  />
                </div>

            
                <div className="w-full">
                  <label
                    htmlFor="yourId"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Your Biodata ID
                  </label>
                  <input
                    type="number"
                    name="yourId"
                    id="yourId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="ID"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="partnerId"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Your Partner Biodata ID
                  </label>
                  <input
                    type="number"
                    name="partnerId"
                    id="partnerId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="ID"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="date"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Marriage Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Date"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Rating"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="story"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Success Story
                  </label>
                  <textarea
                    name="story"
                    id="story"
                    rows={4}
                    className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
              <div className="w-[80%] mx-auto p-4">
                <button type="submit" className="btn1 md:w-full">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
};

export default MarriegeForm;