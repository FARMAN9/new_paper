import React, { useState, useEffect } from "react";

function Header() {
  const date = new Date().toLocaleDateString();

  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <nav className="">
      <div>Date{date}</div>
      <hr />
      <h1>NEWS PAPER</h1>
    </nav>
  );
}

export default Header;
