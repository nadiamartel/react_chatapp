import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import EmojiPicker from 'emoji-picker-react';

const SendMessage = () => {

    const [input, setInput] = useState("");
    const [open, setOpen] = useState("close");

    const onSubmit = async (event) => {
        event.preventDefault();
        const { uid, displayName, photoURL } = auth.currentUser; //verlo en el log
        await addDoc(collection(db, "messages"), {
            text: input,
            name: displayName,
            uid, //revisar esta linea que crashea
            photo: photoURL,
            timestamp: serverTimestamp()
        })
        setInput("");
    }

    const emoji = () => setOpen("open");
    const closeEmoji = () => setOpen("close");
    const onEmojiClick = (emojiData, event) => {
        console.log(emojiData);
        setInput(`${input}${emojiData.emoji}`);
    }
    

    return (
        <div>
            <form onSubmit={onSubmit}>
                <button
                    type="button"
                    className="btn-emoji"
                    onClick={emoji}
                >
                    <i className="fa-regular fa-face-grin-stars"></i>
                </button>
                <div className={open}>
                    <button
                        type="button"
                        className="close-emoji"
                        onClick={closeEmoji}
                    >
                        <i className="fa-regular fa-circle-xmark"></i>
                    </button>
                    <EmojiPicker onEmojiClick={onEmojiClick}/>
                </div>
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