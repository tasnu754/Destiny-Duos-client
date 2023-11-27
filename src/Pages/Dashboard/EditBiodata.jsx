import { useState } from "react";
import { addBiodata } from "../../APIs/biodatas";
import { getRole } from "../../APIs/users";
import { imgURL } from "../../APIs/utils";
import useAuth from "../../Hooks/useAuth";
import { Spinner } from "@material-tailwind/react";

const EditBiodata = () => {
    const { user } = useAuth();
    const [isSpine, setIsSpine] = useState(false);

    const handleAddBiodata = async (e) => {
        setIsSpine(true)
        e.preventDefault();
        
      const form = e.target;
      

      const name = form.name.value;
      const age = form.age.value;
      const date_of_birth = form.birthDate.value;
      const height = form.height.value;
      const weight = form.weight.value;
      const occupation = form.occupation.value;
      const race = form.race.value;
      const mothers_name = form.mName.value;
      const fathers_name = form.fName.value;
      const permanent_division_name = form.permanent.value;
      const present_division_name = form.present.value;
      const biodatatype = form.biodataType.value;
      const expected_partner_age = form.partnerAge.value;
      const expected_partner_height = form.partnerHeight.value;
      const expected_partner_weight = form.partnerWeight.value;
      const contact_email = user?.email;
      const mobile_number = form.number.value;
      const status = "Nothing";
      const image = form.image.files[0];
      
      try{
         const imgurlData = await imgURL(image);
         const imgurl = imgurlData.data.display_url;
         const role = await getRole(user?.email);
         
        const biodata = {
          biodatatype,
          name,
          image: imgurl,
          date_of_birth,
          height,
          weight,
          age,
          occupation,
          race,
          fathers_name,
          mothers_name,
          permanent_division_name,
          present_division_name,
          expected_partner_age,
          expected_partner_height,
          expected_partner_weight,
          contact_email,
          mobile_number,
          status,
          role
        };
        
           await addBiodata(biodata);
          setIsSpine(false);
      

      } catch (err) {
          console.log(err);
      }
      
     
        
      
      
      
    }
    return (
      <div>
        <section className="bg-white ] dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-5xl font-bold text-[#53346D] dark:text-white text-center">
              Create/Edit Biodata
            </h2>
            <form onSubmit={handleAddBiodata} action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type name"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Your Image
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
                    htmlFor="age"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Age"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="birthDate"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Birth Date
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Date"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="height"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Height
                  </label>
                  <select
                    id="height"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Height</option>
                    <option value="Short">Short</option>
                    <option value="Medium">Medium</option>
                    <option value="Tall">Tall</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="weight"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Weight
                  </label>
                  <select
                    id="weight"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Weight</option>
                    <option value="Slim">Slim</option>
                    <option value="Medium">Medium</option>
                    <option value="Muscly">Muscly</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="occupation"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Occupation
                  </label>
                  <select
                    id="occupation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Occupation</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Student">Student</option>
                    <option value="Architect">Architect</option>
                    <option value="House wife">House wife</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Software Developer">
                      Software Developer
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="race"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Race
                  </label>
                  <select
                    id="race"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Race</option>
                    <option value="Caucasian">Caucasian</option>
                    <option value="Asian">Asian</option>
                    <option value="African American">African American</option>
                    <option value="Hispanic">Hispanic</option>
                  </select>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="mName"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Mothers Name
                  </label>
                  <input
                    type="text"
                    name="mName"
                    id="mName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="fName"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Fathers Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="permanent"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Permanent Division
                  </label>
                  <select
                    id="permanent"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Divison</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattagram">Chattagram</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Maymansign">Maymansign</option>
                    <option value="Sylhet">Sylhet</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="present"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Present Division
                  </label>
                  <select
                    id="present"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Divison</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattagram">Chattagram</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Maymansign">Maymansign</option>
                    <option value="Sylhet">Sylhet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="biodataType"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Gender
                  </label>
                  <select
                    id="biodataType"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="partnerAge"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Expected Partner Age
                  </label>
                  <input
                    type="number"
                    name="partnerAge"
                    id="partnerAge"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Age"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="partnerHeight"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Expected Partner Height
                  </label>
                  <select
                    id="partnerHeight"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Height</option>
                    <option value="Short">Short</option>
                    <option value="Medium">Medium</option>
                    <option value="Tall">Tall</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="partnerWeight"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Expected Partner Weight
                  </label>
                  <select
                    id="partnerWeight"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Weight</option>
                    <option value="Slim">Slim</option>
                    <option value="Medium">Medium</option>
                    <option value="Muscly">Muscly</option>
                  </select>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Contact Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user?.email}
                    readOnly
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Email"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="number"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Number"
                    required
                  />
                </div>
              </div>
              <div className="w-[80%] mx-auto py-4 text-center">
                
                  <button type="submit" className="btn1  md:w-full  flex items-center justify-center">
                    {isSpine ? <Spinner className="text-center"></Spinner> : "Save & Publish"}
                  </button>

              </div>
            </form>
          </div>
        </section>
      </div>
    );
};

export default EditBiodata;