import { useContext } from "react";
import { AuthProvider } from "../Auth/FirebaseAuth";

const useAuth = () => {
 const all = useContext(AuthProvider);
 return all;
};

export default useAuth;