import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #2c3e50;
  color: #ecf0f1;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0,0,0,0.5);
`;

const MenuIcon = styled(FaBars)`
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 30px;
  color: #2c3e50;
  cursor: pointer;
  z-index: 1100;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: #ecf0f1;
  cursor: pointer;
  z-index: 1100;
`;

const SidebarContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarLink = styled(Link)`
  display: block;
  color: #ecf0f1;
  text-decoration: none;
  margin: 15px 0;
  font-size: 18px;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  transition: background 0.3s;

  &:hover {
    background: rgba(236, 240, 241, 0.2);
    border-radius: 5px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 900;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  transition: opacity 0.3s ease;
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {!isOpen && <MenuIcon onClick={toggleSidebar} />}
      <SidebarContainer isOpen={isOpen}>
        {isOpen && <CloseIcon onClick={toggleSidebar} />}
        <SidebarContent>
          <h2>Menu</h2>
          <SidebarLink to="/" onClick={toggleSidebar}>Homepage</SidebarLink>
          <SidebarLink to="/menu" onClick={toggleSidebar}>Menu</SidebarLink>
          <SidebarLink to="/favourites" onClick={toggleSidebar}>My Favourites</SidebarLink>
          <SidebarLink to="/random-meal" onClick={toggleSidebar}>Random Meal</SidebarLink>
          <div style={{marginBottom: "500px"}}></div>
          <SidebarLink to="/about" onClick={toggleSidebar}>About Me</SidebarLink>
        </SidebarContent>
      </SidebarContainer>
      <Overlay isOpen={isOpen} onClick={toggleSidebar} />
    </>
  );
};

export default Sidebar;
