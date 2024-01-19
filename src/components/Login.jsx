import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import Swal from "sweetalert2";

const Login = () => {

    const login = async() => {
        const provider = new GoogleAuthProvider();

        try {
            await signInWithPopup(auth, provider)
            Swal.fire({
                icon: "success",
                title: "Welcome!",
                text: "You have successfully logged in with Google",
                timer: 3000,
                timerProgressBar: true
            })
        } catch (error) {
            console.error("Error when authenticating with Google", error.message);
            Swal.fire({
                icon: "error",
                title: "Authentication Error",
                text: "There was a problem signing in with Google. Please try again",
                timer: 3000,
                timerProgressBar: true
            })
        }
    }


    return (
        <div>
            <button className="btn-login" onClick={login}>
                <i className="fa-brands fa-google"></i>
                Sing in whith google
            </button>
        </div>
    )
}

export default Login;