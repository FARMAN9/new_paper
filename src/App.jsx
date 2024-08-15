import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Search/>
      <Main></Main>
      <Footer/>
    </>
  );
}

export default App;
