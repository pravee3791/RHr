import { useNavigate } from "react-router-dom";
function AuthPage(){
    const navigate = useNavigate()
    const setISisAuthenticated = () =>{
        localStorage.setItem(`isAuthenticated`, 'true')
        navigate(`/`)
    }
    return(
        <div>
            <div className="header"></div>
            <div className="authcontainer">
                <div className="uploadButton" onClick={setISisAuthenticated}>
                   Authenticate User 
                </div>
            </div>
        </div>

    )
}
export default AuthPage;