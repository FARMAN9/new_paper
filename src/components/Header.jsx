import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../store/slice/newsApiSlice"; // Adjust the import path as needed

function Header() {
  const [date, setDate] = useState(new Date());
  const news = ["World", "Business", "Finance", "Lifestyle", "Travel", "Sport", "Weather"];
  const [query, setQuery] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (category) => {
    setQuery(category);
    if (category.trim()) {
      dispatch(fetchNews({ query: category }));
    }
  };

  return (
    <nav className="">
      <div className="timebar">
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>Date: {date.toLocaleDateString()}</p>
        <p>Day: {date.toLocaleDateString("en-US", { weekday: "long" })}</p>
        <div className="cmyk">
          <div className="cyan"></div>
          <div className="magenta"></div>
          <div className="yellow"></div>
          <div className="black"></div>
        </div>
      </div>
      <hr />
      <h1>NEWS PAPER</h1>
      <div className="blackstrip-top">
        {news.map((item, index) => (
          <p
            className="newscate"
            onClick={() => handleSearch(item)}
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </nav>
  );
}

export default Header;

