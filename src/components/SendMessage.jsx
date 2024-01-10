import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

const SendMessage = () => {

    const [input, setInput] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const { uid, displayName, photoURL } = auth.currentUser; //verlo en el log
        await addDoc(collection(db, "messages"), {
            text: input,
            name: displayName,
            uid,
            photo: photoURL,
            timestamp: serverTimestamp()
        })
        setInput("");
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Enter your message"
                    value={input}
                    onChange={event => setInput(event.target.value)}
                />
                <button type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}

export default SendMessage;