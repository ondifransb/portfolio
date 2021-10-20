import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AboutContent from "./AboutContent";
import Aboutme from "./Aboutme";
import AnotherDesc from "./AnotherDesc";
import ContactContent from "./ContactContent";
import Property1 from "./property1";
import SelfDescContent from "./SelfDescCover";
import TellMeContent from "./TellMe";

function Section2({ ScrollVal }) {
  const [ScrollValue, setScrollValue] = useState(window.scrollY);
  useEffect(() => {
    function SetScroll() {
      setScrollValue(window.scrollY);
    }
    window.addEventListener("scroll", SetScroll);
    return () => {
      window.removeEventListener("scroll", SetScroll);
    };
  }, [ScrollValue]);

  const [ShowAboutMe, setShowAboutMe] = useState(false);
  useEffect(() => {
    if (200 < ScrollValue <= 848) {
      setShowAboutMe(true);
    } else {
      setShowAboutMe(false);
    }
  }, [ScrollValue]);

  const [OnHoverDesc, setOnHoverDesc] = useState();
  const [AboutMee, setAboutMee] = useState(false);
  const [ContactMe, setContactMe] = useState(false);
  const [TellMe, setTellMe] = useState(false);

  return (
    <Base>
      <Property1 ScrollVall={ScrollVal} />
      <Aboutme ShowAboutMe={ShowAboutMe} ScrollValue={ScrollValue} />
      <AboutContent AboutMee={AboutMee} />
      <ContactContent ContactMe={ContactMe} />
      <TellMeContent TellMe={TellMe} />
      <SelfDescContent />
      <AnotherDesc setTellMe={setTellMe} setContactMe={setContactMe} setAboutMee={setAboutMee} ScrollVal={ScrollVal} setOnHoverDesc={setOnHoverDesc} />
    </Base>
  );
}

const Base = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: black;
  height: 100vh;
  width: 100%;
  position: relative;
  top: 0;
  overflow: hidden;
`;

export default Section2;
