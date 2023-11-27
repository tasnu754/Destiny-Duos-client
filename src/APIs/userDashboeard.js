import { axiosSecure } from "../Hooks/useAxiosSecure";

// get user favourites biodata
export const getUserFavBiodata = async (email) => {
    const { data } = await axiosSecure(`/userFavBiodatas/${email}`)
    return data;
}

// delete favourite biodata item
export const deleteUserFavBiodata = async (id) => {
    const { data } = await axiosSecure.delete(`/deleteUserFavBiodata/${id}`)
    return data;
}

//add success story to success strory collection
export const addSuccessStroy = async(successStory) => {
    const { data } = await axiosSecure.put('/addSuccessStory' , successStory)
    return data;
}

