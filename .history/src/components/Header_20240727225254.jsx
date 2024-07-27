import React from "react";

function Header() {
  const date = new Date().toLocaleDateString();
  return (
    <nav className="">
      <div>Date{date}</div>
      <hr />
      <h1>NEWS PAPER</h1>
    </nav>
  );
}

export default Header;
