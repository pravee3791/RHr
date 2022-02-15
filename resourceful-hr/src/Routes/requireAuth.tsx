import {
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
function RequireAuth() {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    let location = useLocation();
    if (!isAuthenticated) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/auth" state={{ from: location }} />;
    }

    return <Outlet />;
}

export default RequireAuth;