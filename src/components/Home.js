import React, { useContext } from "react";
import { AuthContext } from "../context/UsesrContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return <div>this is home for {user?.email}</div>;
};

export default Home;
