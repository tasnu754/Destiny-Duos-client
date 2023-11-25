import { axiosSecure } from "../Hooks/useAxiosSecure";



export const postUser = async(user) => {
    const { data } = await axiosSecure.put('/users' , user)
    return data;
}
