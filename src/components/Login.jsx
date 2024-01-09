import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth"

const Login = () => {

    const [user] = useAuthState(auth); //para recuperar al usuario actual
    console.log(user);

    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }


    return (
        <div>
            <button className="btn-login" onClick={login}>
                <i class="fa-brands fa-google"></i>
                Sing in whith google
            </button>
        </div>
    )
}

export default Login;