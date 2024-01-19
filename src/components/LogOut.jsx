import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

const LogOut = () => {

    const logout = async() =>{
        try {
            await signOut(auth);
            Swal.fire({
                icon: "success",
                title: "Log out",
                text: "You have successfully logged out. ¡We hope to see you soon!",
                timer: 3000,
                timerProgressBar: true
            })
        } catch (error) {
            console.error("Error when closing session", error.message);
            Swal.fire({
                icon: "error",
                title: "Logout error",
                text: "There was a problem signing out. Please try again",
                timer: 3000,
                timerProgressBar: true
            })
        }
        
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