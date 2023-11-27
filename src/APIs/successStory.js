import { axiosSecure } from "../Hooks/useAxiosSecure";


export const getAllSuccessStory = async() => {
    const { data } = await axiosSecure('/succesStory')
    return data;
}