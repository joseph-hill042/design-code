import * as React from "react";
import { Link } from "gatsby";
// @ts-ignore
import logo from "../../images/logos/logo.svg";

const HeroSection: React.FC = () => {
  return (
    <>
      <img src={logo} alt={"logo"}></img>
      <h1>Design and Code React apps</h1>
      <p>
        Don't skip design. Learn design and code, by building real apps with
        React and Swift. Complete courses about the best tools.
      </p>
      <Link to={"/page-2/"}>Go to page 2</Link> <br />
    </>
  );
};

export default HeroSection;
