import { Link } from "react-router-dom";
import styled from "styled-components";
import { headerNavLinks } from "../utils/constants";
import { NavbarLink } from "./";

const Header = () => {
  return (
    <Navbar>
      <NavLinksWrapper>
        <Logo>
          <img src="/images/logo.svg" alt="Disney+ logo" />
        </Logo>
        <NavMenu>
          {headerNavLinks.map((headerLink, index) => (
            <NavbarLink
              key={index}
              name={headerLink.name}
              icon={headerLink.icon}
            />
          ))}
        </NavMenu>
      </NavLinksWrapper>

      <Login>Login</Login>
    </Navbar>
  );
};

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  z-index: 100;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  max-height: 70px;
  display: inline-block img {
    display: block;
    width: 100%;
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-flow: row nowrap;
  margin-left: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.button`
  padding: 8px 15px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #f9f9f9;
  text-transform: uppercase;
  border-radius: 5px;
  transition: 0.3s ease;
  letter-spacing: 1.5px;
  font-weight: 500;
  outline: none;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    border-color: transparent;
    cursor: pointer;
  }
`;

export default Header;
