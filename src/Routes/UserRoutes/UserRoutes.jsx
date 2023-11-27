import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { getRole } from "../../APIs/users";
import useAuth from "../../Hooks/useAuth";

const UserRoutes = ({children}) => {
    const { user } = useAuth();
    
       const { data: role, isLoading } = useQuery({
         queryKey: ["role"],
         queryFn: () => getRole(user.email),
       });

     if (isLoading) {
       return <span className="loading loading-spinner text-success"></span>;
     }

     if (role === "user" || role === "Premium" || role === "requested") {
       return children;
     }

     return <Navigate to="/"></Navigate>;
};

export default UserRoutes;