import { axiosSecure } from "../Hooks/useAxiosSecure";


export const getUserFavBiodata = async (email) => {
    const { data } = await axiosSecure(`/userFavBiodatas/${email}`)
    return data;
}