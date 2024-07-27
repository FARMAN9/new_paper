import React from "react";

function Header() {
  const date = new Date().toLocaleDateString();
  return (
    <nav className="">
      <divClass>Date{date}</div>
      <hr />
      NEWS PAPER
    </nav>
  );
}

export default Header;
