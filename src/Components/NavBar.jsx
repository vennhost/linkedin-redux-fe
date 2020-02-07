import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Container,
  Row,
  Col
  
} from 'reactstrap';
import Logo from './logo.png';
import '../index.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {Link} from 'react-router-dom'


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

//   1) get info from:   
//   let respUser=await fetch(" https://strive-school-testing-apis.herokuapp.com/api/profile/",{
//     headers:{
//         "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc="
//     }
// })
// console.log(await respUser.json())
// 2) set them in to the state => users
// 3) create a list of names that depends on this.state.users
// 4) make this list visible only when the user searchs
// 5) filter the ist for the value into the search abr


  return (
    <div>
      <Navbar color="dark" dark expand="md" className="fixed-top" id="main-nav">
        <Container id="nav-container">
        <NavbarBrand href="/"><img src={Logo} alt="Logo" width="30px" className="logo" /></NavbarBrand>
        <Input type="text" id="search" onKeyUp="handleSearch" placeholder="Search..." className="col-xs-3 mr-5" />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto ml-5" navbar>
            <NavItem>
              <Link className="menu" to="/"><MaterialIcon icon="home" id="icon" size={20} color='#FAFAFA' /> <span className="nav-name">Home</span></Link>
            </NavItem>
            <NavItem>
              <Link className="menu" to="/profile"><MaterialIcon id="icon" icon="people" size={20} color='#FAFAFA' /> <span className="nav-name">Profile</span></Link>
            </NavItem>

            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon icon="work" id="icon" size={20} color='#FAFAFA' /> <span className="nav-name">Jobs</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon id="icon" icon="message" size={20} color='#FAFAFA' /> <span className="nav-name">Messaging</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon id="icon" icon="notifications" size={20} color='#FAFAFA' /> <span className="nav-name">Notifications</span></NavLink>
            </NavItem>

            <UncontrolledDropdown className="menu" nav inNavbar>
              <DropdownToggle nav caret>
              <MaterialIcon id="icon" icon="account_box" size={20} color='#FAFAFA' />
              <span className="nav-name">Me</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  ACCOUNT
                </DropdownItem>
                <DropdownItem>
                  NEED HELP?
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  MANAGE ACCOUNT
                  <hr />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown className="menu" nav inNavbar>
              <DropdownToggle nav caret>
              <MaterialIcon id="icon" icon="apps" size={20} color='#FAFAFA' />
              <span className="nav-name">Work</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  ACCOUNT
                </DropdownItem>
                <DropdownItem>
                  NEED HELP?
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  MANAGE ACCOUNT
                  <hr />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink className="menu" href="#"><MaterialIcon id="icon" icon="assignment" size={20} color='#FAFAFA' /> <span className="nav-name">Post a job</span></NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;