import { axiosSecure } from "../Hooks/useAxiosSecure";



export const postUser = async(user) => {
    const { data } = await axiosSecure.put('/users' , user)
    return data;
}


//Role
export const getRole = async(email) => {
    const { data } = await axiosSecure.get(`/user/role/${email}`)
    return data.role;
}
