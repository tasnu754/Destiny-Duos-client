import { axiosSecure } from "../Hooks/useAxiosSecure"


export const getAllBiodatas = async() => {
    const { data } = await axiosSecure('/biodatas')
    return data;
}



//Filtered by age range , type , divison
export const getFilteredBiodatas = async (queryField , queryValue) => {
   
    if (queryField === 'type' || !queryValue) {
        const { data } = await axiosSecure(`/biodatas?biodatatype=${queryValue}`);
        return data;
    }
    else if(queryField === 'divison' || !queryValue) {
        const { data } = await axiosSecure(`/biodatas?permanent_division_name=${queryValue}`);
        return data;
    }
    else if (queryField === 'role') {
         const { data } = await axiosSecure(`/biodatas?role=${queryValue}`);
        return data;
    }
    
    
}