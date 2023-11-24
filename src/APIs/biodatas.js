import { axiosSecure } from "../Hooks/useAxiosSecure"

export const getAllBiodatas = async() => {
    const { data } = await axiosSecure('/biodatas')
    return data;
}