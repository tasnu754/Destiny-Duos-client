import { axiosSecure } from "../Hooks/useAxiosSecure";

export const addFav = async(biodataItem) => {
    const { data } = await axiosSecure.post('/favourites' , biodataItem)
    return data;
}