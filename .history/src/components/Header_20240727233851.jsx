import React, { useState, useEffect } from "react";

function Header() {
  var [date, setDate] = useState(new Date());
  const news = ['all',''];

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
        <div className="cmyk">
          <div className="cyan"></div>
          <div className="magenta"></div>
          <div className="yellow"></div>
          <div className="black"></div>
        </div>
      </div>
      <hr />
      <h1>NEWS PAPER</h1>
      <p className="blackstrip-top">{}</p>
    </nav>
  );
}

export default Header;
