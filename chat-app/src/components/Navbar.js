import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Kaushik Chat</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <span>Ram</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
