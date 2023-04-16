import React from "react";
import img1 from "./img1.jpg";
import Common from "./Common";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with "
        imgsrc={img1}
        visit="/service"
        btname="Get Started"
      />
          <NavLink to="/contact" type="button" className="btn btn-secondary">
                Get Contact
              </NavLink>
    </>
  );
}

export default Home;
