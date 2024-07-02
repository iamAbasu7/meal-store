import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  z-index: 1000;
`;

const MenuIcon = styled(FaBars)`
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  z-index: 1100;
`;

const SidebarContent = styled.div`
  padding: 20px;
`;

const SidebarLink = styled(Link)`
  display: block;
  color: #fff;
  text-decoration: none;
  margin: 10px 0;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <MenuIcon onClick={toggleSidebar} />
      <SidebarContainer isOpen={isOpen}>
        <SidebarContent>
          <h2>Menu</h2>
          <SidebarLink to="/" onClick={toggleSidebar}>Home</SidebarLink>
          <SidebarLink to="/menu" onClick={toggleSidebar}>Menu</SidebarLink>
          <SidebarLink to="/favourites" onClick={toggleSidebar}>My Favourites</SidebarLink>
          <SidebarLink to="/random-meal" onClick={toggleSidebar}>Meal Generator</SidebarLink>
          <div style={{marginBottom: "740px"}}></div>
          <SidebarLink to="/about" onClick={toggleSidebar}>About Me</SidebarLink>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
