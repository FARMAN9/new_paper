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
        <p>
          {" "}
          design by Farman{" "}
          <img
            src="https://thumbs.dreamstime.com/z/cmyk-colours-dots-vector-white-color-background-cmyk-colours-dots-vector-white-color-background-234322824.jpg?ct=jpeg"
            style={'hight=30px}
            alt=""
          />{" "}
        </p>
      </div>
      <hr />
      <h1>NEWS PAPER</h1>
    </nav>
  );
}

export default Header;
