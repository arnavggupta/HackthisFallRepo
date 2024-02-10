import "../../src/chat.css";
<<<<<<< HEAD
import {io} from "socket.io-client";
import { useState,useEffect } from "react";
// function Chat() {
//   return (
//     <div className="join-container">
//       <header className="join-header"> -----
//         <h1>
//           <i className="fas fa-smile"></i> ChatWhat
//         </h1>
//       </header>
//       <main className="join-main">
//         <form action="chat.html">
//           <div className="form-control">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               placeholder="Enter username..."
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label htmlFor="room">Room</label>
//             <select name="room" id="room">
//               <option value="WEB Developer">WEB Developer</option>
//               <option value="Android Developer">Android Developer</option>
//               <option value="Flutter Developer">Flutter Developer</option>
//               <option value="AR-VR Developer">AR-VR Developer</option>
//               <option value="ML Enthusiast">ML Enthusiast</option>
//               <option value="Khali INsaan(Just Like me)">
//                 Khali INsaan(Just Like me)
//               </option>
//             </select>
//           </div>
//           <button type="submit" className="btn">
//             Join Chat
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// }

// export default Chat;

  function Chats() {
=======

function Chats() {
  return (
    <div className="h-[80%] w-screen">
      <div className="bg-slate-400 h-4/6 w-screen  rounded-lg m-2 p-2 overflow-y-auto">
          <div className="max-w-[80%] bg-white rounded-md inline-block w-[80%] overflow-x-auto m-1 p-2">
            <div className="text-sm font-semibold">
                Arnav
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam consectetur a dolore atque cum dolorum molestias debitis quas odio quia? Aperiam, nemo option.
            </div>
          </div>
      </div>
      <div className="flex justify-center">
        <input type="text" className="w-[80%] p-2 rounded-lg"/>
        <button className="bg-sky-700 text-slate-200 p-1 mx-1 rounded-lg font-semibold">Send →</button>
      </div>
    </div>
  );
}
>>>>>>> d4919a693df3a8d7e152c2a63e561bcf3295fef2

    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    
    const socket = io('http://localhost:3000');  
    useEffect(() => {
      // Listen for messages from the server
      
      socket.on('chat message', (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
  
      return () => {
        // Clean up the socket connection when the component unmounts
        socket.disconnect();
      };
    }, []);
    
  const sendMessage = (e) => {
    e.preventDefault();
    // Send the message to the server
    socket.emit('chat message', messageInput);
    setMessageInput('');
  };
   
    return (
      <div>
        <div className="chat-container">  
          <header className="chat-header">
            <h1>
              <i className="fas fa-smile"></i> ChatWhat
            </h1>
            <a href="index.html" className="btn">
              Leave Room
            </a>
          </header>
          <main className="chat-main">
            <div className="chat-sidebar">
              <h3 className=" text-black">
                <i className="fas fa-comments"></i> Room Name:
              </h3>
              <h2 className="text-blue-600" id="room-name">
                JavaScript
              </h2>
              <h3 className="text-blue-600">
                <i className="fas fa-users"></i> Users
              </h3>
              <ul id="users">
                {/* <!-- <li>Arnav</li>
            <li>Amon</li> 
            <li>Kaustubh</li>
            <li>Hitarth</li>
            --> */}
              </ul>
            </div>
            <div className="chat-messages"></div>
          </main>
          <div className="chat-form-container">
            <form id="chat-form">
              <input
                id="msg"
                type="text"
                placeholder="Enter Message"
                required
                autoComplete="off"
              />
              <button className="btn">
                <i className="fas fa-paper-plane"></i> Send
              </button>
            </form>
          </div>
        </div>
        
      </div>
    );
  }

  export default Chats;

  