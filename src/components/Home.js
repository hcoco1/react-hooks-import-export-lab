import React from "react";
import { username, city } from "../data/user.js"



function Home() {

  console.log(username, city)
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home 