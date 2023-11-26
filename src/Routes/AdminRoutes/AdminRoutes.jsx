import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { getRole } from "../../APIs/users";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({children}) => {
    const { user } = useAuth();

    const { data: role, isLoading } = useQuery({
      queryKey: ["role"],
      queryFn: () => getRole(user.email),
    });

    if (isLoading) {
      return <span className="loading loading-spinner text-success"></span>;
    }

    if (role === "Admin") {
      return children;
    }

    return <Navigate to="/"></Navigate>;
};

export default AdminRoutes;