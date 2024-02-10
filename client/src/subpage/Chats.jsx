// // import "./index.css";
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
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.11.2/qs.min.js"
        integrity="sha512-vCegEXqPUYpZsTGz2lk0jaQ1psxtFeniVJACAXhMVxuoYa/N4nZkjoVFOxLwP7uGeQOoemiz7DQrIpRTj4IBPw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></script>
      <script src="/socket.io/socket.io.js"></script>
      <script src="main.js"></script>
    </div>
  );
}

export default Chats;
