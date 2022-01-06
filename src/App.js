import React, { useEffect, useState } from "react";
import "./App.css";
import Section1 from "./component/Section1/Section1";
import Section2 from "./component/section2/section2";
import Section3 from "./component/section3/Section3";

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
    if (Scroll > 480) {
      setScrollVal(true);
      console.log("baby its " + Scroll);
    } else {
      setScrollVal(false);
      console.log("its " + Scroll);
    }
  }, [Scroll]);

  const [ScrollVal2, setScrollVal2] = useState(false);
  useEffect(() => {
    if (Scroll > 1200) {
      setScrollVal2(true);
      console.log("baby its " + Scroll);
    } else {
      setScrollVal2(false);
      console.log("its " + Scroll);
    }
  }, [Scroll]);

  const [ScrollVal3, setScrollVal3] = useState(false);
  useEffect(() => {
    if (Scroll > 1800) {
      setScrollVal3(true);
      console.log("baby its " + Scroll);
    } else {
      setScrollVal3(false);
      console.log("its " + Scroll);
    }
  }, [Scroll]);

  return (
    <div className="App">
      {/* <Section1 />
      <Section2 ScrollVal={ScrollVal} Scroll={Scroll} /> */}
      <Section3 ScrollVal={ScrollVal} ScrollVal2={ScrollVal2} ScrollVal3={ScrollVal3}/>
    </div>
  );
}

export default App;
