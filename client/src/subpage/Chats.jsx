import "../../src/chat.css";
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
        <main className="chat-main h-80">
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
