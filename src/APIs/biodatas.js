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
    else if (queryField === 'role' || !queryValue) {
         const { data } = await axiosSecure(`/biodatas?role=${queryValue}`);
        return data;
    } 
    
}


//Get single biodata with id
export const getSingleBiodata = async(id) => {
    const { data } = await axiosSecure(`/biodataDetails/${id}`)
    return data;
}

//Count biodatas
export const getCountBiodatas = async() => {
    const { data } = await axiosSecure('/biodatas/count')
    return data;
}