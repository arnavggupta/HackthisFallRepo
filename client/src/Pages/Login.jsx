import React,{useState} from 'react';


const LoginPage = () => {

  const [userName,setUserName] = useState("");
  const [password,setpassword] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('your-background-image.jpg')" }}>
      <div className="max-w-md w-full p-8 bg-white bg-opacity-80 border border-[#1976D2] rounded-md shadow-md">
        <h2 className="text-4xl font-extrabold text-center text-[#1976D2] mb-6">
          Welcome Back!
        </h2>

        <form className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e)=>setUserName(e.target.value)} 
              id="username"
              name="username"
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
                  value= {password}
                  onChange={(e)=>{setpassword(e.target.value)}}
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1976D2] text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-[#1976D2] hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
