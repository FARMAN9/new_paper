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
      <div className="mytest">
        <p> Time : {date.toLocaleTimeString()}</p>
        <p> Date : {date.toLocaleDateString()}</p>
        <p> Day : {date.toLocaleDateString("en-US", { weekday: "long" })}</p>
        <p> Month : {date.toLocaleDateString("en-US", { month: "long" })}</p>
        <p> Year : {date.getFullYear()}</p>
        <p> Week : {date.toLocaleDateString("en-US", { week: "numeric" })}</p>
      </div>
      <hr />
      <h1>NEWS PAPER</h1>
    </nav>
  );
}

export default Header;
