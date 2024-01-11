import { auth } from "../firebase";

const Message = ({ message }) => {

    let style = "message"; //condicional para msj propios y de 3ros
    if(auth.currentUser){
        const user = auth.currentUser.uid;
        const newUser = message.uid;
        style = user === newUser ? "my-message" : "message"
    }


    return (
        <article className={style}>
            <div>
                <div className="text-message">
                    <p className="text">{message.text}</p>
                </div>
            </div>
            <img src={message.photo} alt="userPhoto" referrerPolicy="no-referrer" />
        </article>
    )
}

export default Message;