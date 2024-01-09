import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const LogOut = () => {

    const logout = () =>{
        signOut(auth);
    }

    return (
        <div>
            <button className="btn-login btn-logout" onClick={logout}>
                <i className="fa-brands fa-google"></i>
                LogOut
            </button>
        </div>
    )
}

export default LogOut;