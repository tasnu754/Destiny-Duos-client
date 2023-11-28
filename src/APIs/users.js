import { axiosSecure } from "../Hooks/useAxiosSecure";



export const postUser = async(user) => {
    const { data } = await axiosSecure.post('/users' , user)
    return data;
}

//make premium
export const premiumRequest = async(user) => {
    const { data } = await axiosSecure.post('/users/premiumRequest' , user)
    return data;
}


//Role
export const getRole = async(email) => {
    const { data } = await axiosSecure.get(`/user/role/${email}`)
    return data.role;
}

//get all users
export const getAllUsers = async() => {
    const { data } = await axiosSecure.get("/getusers")
    return data;
}