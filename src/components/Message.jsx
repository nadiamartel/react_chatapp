import { auth } from "../firebase";
import { formatDate } from "./utils";

const Message = ({ message }) => {

    let style = "message"; //condicional para msj propios y de 3ros
    if (auth.currentUser) {
        const user = auth.currentUser.uid;
        const newUser = message.uid;
        style = user === newUser ? "my-message" : "message"
    }
    console.log(message.timestamp) //esta en nanosec y sec - cambiar!

    return (
        <article className={style}>
            <div>
                <div className="text-message">
                    <p className="text">{message.text}</p>
                </div>
                <p className="time">{formatDate(message.timestamp)}</p>
            </div>
            <img src={message.photo} alt="userPhoto" referrerPolicy="no-referrer" />
        </article>
    )
}

export default Message;