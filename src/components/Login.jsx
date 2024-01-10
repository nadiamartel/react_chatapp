import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {

    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
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