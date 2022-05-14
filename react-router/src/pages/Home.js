

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return(
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  )
}

export default Home;