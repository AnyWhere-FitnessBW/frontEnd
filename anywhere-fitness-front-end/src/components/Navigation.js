import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationDiv = styled.div`
  width: 100%;
  background: #173F4E;
  display: flex;
  justify-content: flex-end;
  height: 4rem;
  align-items: center;
  border-bottom: 4px solid black;
  border-top: 4px solid black;
  a {
    text-decoration: none;
    margin-right: 3%;
    color: #DDAA00;
    font-size: 1.4rem;
  }
`;

const Navigation = () => {
  return (
    
    <NavigationDiv>
      <Link to="/login-client">LOGIN CLIENT</Link>
      <Link to="/login-instructor">LOGIN INSTRUCTOR</Link>
      <Link to="/register-client">REGISTER CLIENT</Link>
      <Link to="/register-instructor">REGISTER INSTRUCTOR</Link>

      {/* Private route testing */}
      <Link to="/dashboard-instructor">DASHBOARD INSTRUCTOR</Link>
      
      <a href='' target='__blank'>About (marketing page goes here)</a>
      <Link to="/">Home</Link>
    </NavigationDiv>
  );
};

export default Navigation;