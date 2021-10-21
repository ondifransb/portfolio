import React, { useEffect, useState } from "react";
import "./App.css";
import Section1 from "./component/Section1/Section1";
import Section2 from "./component/section2/section2";
import Section3 from "./component/section3/Section3";
import Section4 from "./component/section4/Section4";

function App() {
  const [Scroll, setScroll] = useState(window.scrollY);
  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Scroll]);

  const [ScrollVal, setScrollVal] = useState(false);
  useEffect(() => {
    if (Scroll > 250) {
      setScrollVal(true);
      console.log("baby its " + Scroll);
    } else {
      setScrollVal(false);
      console.log("its " + Scroll);
    }
  }, [Scroll]);

  return (
    <div className="App">
      <Section1 />
      <Section2 ScrollVal={ScrollVal} Scroll={Scroll} />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
