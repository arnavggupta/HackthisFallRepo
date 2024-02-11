import "../../src/chat.css";

import { useState,useEffect } from "react";

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
        <input type="text" className="w-[80%] p-2 rounded-lg border-slate-500 border-2"/>
        <button className="bg-sky-700 text-slate-200 p-1 mx-1 rounded-lg font-semibold px-2">Send →</button>
      </div>
    </div>
  );
}

    

  export default Chats;

  