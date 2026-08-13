import React, { useState } from "react";

const Login = ({ users, setIsLoggedIn, setShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


// for passswored validatiion
  // const validatePassword = (password) => {
  //   if(password.length < 8){
  //     return "Password must be at least 8 characters"
  //   }
  //   if(!/[A-Z]/.test(password)){
  //     return "Password must contain at leat 1 UpperCase letter"
  //   }
  //   if(!/[0-9]/.test(password)){
  //     return "Password contaim at least One Number";
  //   }
  //   return "";
  // }

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => 
        user.email ===email &&
      user.password === password
    )

    if(foundUser){
      setError("");
      setIsLoggedIn(true)
    }
    else{
      setError("Incorrect Email or Password")
    }
  //   const passwordError = validatePassword(password)
  //     if (passwordError) {
  //   setError(passwordError);
  //   return;
  // }
  //   if (
  //     email.trim() === user.email &&
  //     password.trim() === user.password
  //   ) {
  //     setError(passwordError);
  //     setIsLoggedIn(true);
  //   } else {
  //     setError("Incorrect Email or Password");
  //   }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in to continue
        </p>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
              // setError("");
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        {/* Error Message */}
        {error && (
  <div className="mb-4 animate-pulse rounded-lg bg-red-100 border border-red-300 p-3">
    <p className="text-center text-red-600 font-semibold">
      ⚠️ {error}
    </p>
  </div>
)}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 cursor-pointer rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
        >
          Login
        </button>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{" "}
      <button
        onClick={() => setShowSignUp(true)}
        className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition duration-200 cursor-pointer"
        >
      Sign Up
      </button>
      </p>

        
      </div>
    </div>
  );
};

export default Login;