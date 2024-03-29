import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
const SignUpPage = () => {
  const [date, setDate] = useState(new Date());
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const[email,setEmail]=useState('');
  const[cpassword,setCpassword]=useState('');
  const sendToSignin=async()=>{
    const d={username:username, email:email,confirm_password:cpassword,dob:date,password:password};
    console.log(d);
    const {data}=await axios.post('http://localhost:3000/api/register',d);
    console.log(data);

  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('your-background-image.jpg')" }}
    >
      <div className="max-w-md w-full p-8 bg-white bg-opacity-80 border border-[#1976D2] rounded-md shadow-md">
        <h2 className="text-4xl font-extrabold text-center text-[#1976D2] mb-6">
          Sign Up
        </h2>

        
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={e=>{setUsername(e.target.value)}}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={cpassword}
              onChange={e =>setCpassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
          <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
             Date
            </label>
         <DatePicker
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yy"
          id="date"
          className="w-full px-3 py-2 border rounded-md"
          calendarPlacement="right"/>
    </div>

          <button
            className="w-full bg-[#1976D2] text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={sendToSignin}
          >
            Sign Up
          </button>
        
      </div>
    </div>
  );
};

export default SignUpPage;
