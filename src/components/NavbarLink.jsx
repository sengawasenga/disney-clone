import styled from "styled-components";

const NavbarLink = ({ icon, name }) => {
  return (
    <NavLink>
      <NavLinkIcon draggable="false" src={icon} />
      <NavLinkName>{name}</NavLinkName>
    </NavLink>
  );
};

const NavLink = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const NavLinkIcon = styled.img`
  height: 1.2rem;
  width: auto;
  margin-right: 5px;
`;

const NavLinkName = styled.span`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  position: relative;
  font-size: 14px;
`;

export default NavbarLink;
