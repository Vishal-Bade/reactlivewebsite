import React from "react";
import img1 from "./img1.jpg";
import Common from "./Common";

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={img1}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}

export default About;
