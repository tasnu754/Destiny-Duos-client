import { axiosSecure } from "../Hooks/useAxiosSecure"



export const createPaymentIntent = async (price) => {
    
    const { data } = await axiosSecure.post('/creatPayIntent', price);
    return data
}

export const saveContactReq = async (requestedBiodata) => {
    
    const { data } = await axiosSecure.post('/contactRequests', requestedBiodata);
    return data
}


// export const biodataStatus = async (id , status) => {
    
//     const { data } = await axiosSecure.patch(`/biodata/status/${id}`,{ status});
//     return data
// }