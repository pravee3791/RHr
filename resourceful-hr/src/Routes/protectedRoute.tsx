import { Navigate} from "react-router-dom";
import { RouteProps  } from "react-router";

interface ProtectedRouteProps extends RouteProps{
    redirectTo:string, 
    children: any;
}

function ProtectedRoute<ProtectedRouteProps>({ children, redirectTo}) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated? children: <Navigate to={redirectTo} />

}

export default ProtectedRoute;