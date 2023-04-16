import React from "react";
import img1 from "./img1.jpg";
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with "
        imgsrc={img1}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
