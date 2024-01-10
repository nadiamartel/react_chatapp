import { useEffect, useState } from "react";
import { auth, db } from "../firebase.js";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Message from "./Message.jsx";
import SendMessage from "./SendMessage.jsx";

const Chat = () => {

    const [messages, setMessages] = useState([]); //para recuperar de la bdd

    useEffect(() => {
        const newQuery = query(collection(db, "messages"), orderBy("timestamp"));

        const unsubscribe = onSnapshot(newQuery, (querySpanshot) => {
            let currentMsg = [];
            querySpanshot.forEach(item => {
                // console.log(item.data());
                currentMsg.push({
                    content: item.data(),
                    id: item.id
                })
            })
            setMessages(currentMsg);
        })
        return unsubscribe;
    }, [])

    return (
        <section className="chat-content">
            {
                messages && messages.map(item => {
                    return (
                        <Message
                            key={item.id}
                            message={item.content} //todo el contenido guardado arriba
                        />
                    )
                })
            }
            <SendMessage />
        </section>
    )
}

export default Chat;