import React from "react";

const DashBoard = ({ setIsLoggedIn }) => {

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-700">

      <div className="bg-white rounded-3xl shadow-2xl p-10 text-center w-[400px]">

        <h1 className="text-4xl font-bold text-gray-800">
          🎉 Welcome
        </h1>

        <p className="text-gray-500 mt-3">
          You have successfully logged in.
        </p>

        <button
          onClick={handleLogout}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default DashBoard;