import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UsesrContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log("logged out successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          AuthRouterContext
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/home">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user?.email && <span>Welcome {user.email}</span>}
        {user?.email && (
          <button onClick={handleLogOut} className="btn btan-sm">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
