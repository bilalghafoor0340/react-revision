import React from 'react'
import { useState } from 'react'
// import Login from './Login'

// the users and set users are teh comes from app.jsx in which thaey havw a usestate()

const SignUp = ({users, setUsers, setShowSignUp}) => {
    const [signUpEmail, setSignUpEmail] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")
    // const [error, setError] = useState("")

    // password validation
    const hasMinLength = signUpPassword.length >= 8;
    const hasNumber = /[0-9]/.test(signUpPassword);
    const hasUppercase = /[A-Z]/.test(signUpPassword);
    const hasSpecialChar = /[!@#$%^&*]/.test(signUpPassword);

    // All passsword validation use be true
    const passwordValid = hasMinLength && hasNumber && hasUppercase && hasSpecialChar;

    // when click up btn the email and passwaeod can move to users
    // move to app.jsx
    // const [users, setUsers] = useState([]);

    // they handle the singup btn click
    const handleSignUp = () => {
      


      // 1. Check email
      if(signUpEmail === "") {
        alert("Please Enter your Email")
        return
      }
       // 2. Check duplicate email
      const emailExists = users.some(
        (user) => user.email === signUpEmail);

      if(emailExists){
        alert("Email already exists");
        return;
        }
        // 3. Check password
      if(!passwordValid){
        alert("Password does not meet all requirments")
        return;
      }
       // 4. Create user
      const newUser = {
        email: signUpEmail,
        password: signUpPassword
        };

       // 5. Add user to array
      setUsers([...users, newUser]);
        console.log(newUser);

      //6 Clear input fields
      setSignUpEmail("");
      setSignUpPassword("");
      // switch to login form 
      setShowSignUp(false);

        console.log(users);
  };




  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">

      {/* Signup Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100">
            <span className="text-2xl">👤</span>
          </div>

          <h2 className="text-3xl font-bold text-slate-800">
            Create Account
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Sign up to get started with your account
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            placeholder="Create a strong password"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Password Requirements */}
        <div className="mb-6 rounded-xl bg-slate-50 p-4">
          <p className="mb-3 text-sm font-semibold text-slate-700">
            Password must contain:
          </p>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

            <p
              className={`text-sm ${
                hasMinLength
                  ? "text-green-600"
                  : "text-slate-500"
              }`}
            >
              {hasMinLength ? "✓" : "○"} 8+ characters
            </p>

            <p
              className={`text-sm ${
                hasNumber
                  ? "text-green-600"
                  : "text-slate-500"
              }`}
            >
              {hasNumber ? "✓" : "○"} Contains number
            </p>

            <p
              className={`text-sm ${
                hasUppercase
                  ? "text-green-600"
                  : "text-slate-500"
              }`}
            >
              {hasUppercase ? "✓" : "○"} Uppercase letter
            </p>

            <p
              className={`text-sm ${
                hasSpecialChar
                  ? "text-green-600"
                  : "text-slate-500"
              }`}
            >
              {hasSpecialChar ? "✓" : "○"} Special character
            </p>

          </div>
        </div>

        {/* Signup Button */}
        <button
          onClick={handleSignUp}
          className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700 active:scale-[0.98] cursor-pointer"
        >
          Create Account
        </button>

        {/* Login text */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <button 
            onClick={()=> setShowSignUp(false)}
            className="font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer">
            Login
          </button>
        </p>

      </div>
    </div>
  )
}

export default SignUp