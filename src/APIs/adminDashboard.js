import { axiosSecure } from "../Hooks/useAxiosSecure";

// make admin/premium to an user
export const changeRole = async (userEmail, role) => {
    const userRole={role}
    const { data } = await axiosSecure.patch(`/changeRole/${userEmail}` , userRole)
    return data;
}

// get contact request biodata
export const getContactRequests= async () => {
    const { data } = await axiosSecure("/getContactRequests/")
    return data;
}

// approve contact request
export const approveContact = async (id) => {
    const { data } = await axiosSecure.patch(`/approveContact/${id}`)
    return data;
}