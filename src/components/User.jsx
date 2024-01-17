import LogOut from "./LogOut";
import Login from "./Login";
import userPhoto from "../assets/user.jpg";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import test from "../assets/name_bg.png";

const User = () => {

    const [user] = useAuthState(auth); //para recuperar al usuario actual
    console.log(user);
    
    const image = user ? user.photoURL : userPhoto;

    const name = user ? user.displayName : "Name User";


    return(
        <div className="right-side">
            {/* <h1><i className="fa-solid fa-comments"></i>ExpressChat</h1> */}
            <img src={test} alt="logo" className="logo" />
            <article className="card-user">
                <img src={image} alt="userPhoto"  referrerPolicy="no-referrer"/>
                <p>{name}</p>
                {
                    user ? <LogOut /> :  <Login />
                }
            </article>      
        </div>
    )
}

export default User;