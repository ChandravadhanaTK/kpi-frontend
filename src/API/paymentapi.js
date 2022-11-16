import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/Monitor Submission" activeStyle>
          Monitor Submission
          </NavLink>
          <NavLink to="/Payment Activity" activeStyle>
          Payment Activity
          </NavLink>
          <NavLink to="/Reporting" activeStyle>
          Reporting
          </NavLink>
          <NavLink to="/GMAS-KPIs" activeStyle>
          GMAS-KPIs
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;