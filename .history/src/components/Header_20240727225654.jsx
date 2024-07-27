import React, { useState, useEffect } from "react";


function Header() {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <nav className="">
      <div >
        <p> Time : {date.toLocaleTimeString()}</p>
        <p> Date : {date.toLocaleDateString()}</p>
      </div>
      <hr />
      <h1>NEWS PAPER</h1>
    </nav>
  );
}

export default Header;
