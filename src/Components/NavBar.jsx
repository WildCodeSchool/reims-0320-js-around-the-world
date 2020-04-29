import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./NavBar.css";

const NavBarMB = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Around The World</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="NavDestock">
              <h5>Contact Us</h5>
            </NavItem>
            <NavItem className="NavDestock">
              <a
                href="https://www.wildcodeschool.com/fr-FR"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wild Code School
              </a>
            </NavItem>
            <NavItem className="NavDestock">
              <a
                href="https://fr.linkedin.com/in/victor-veyrier-ab6948194"
                target="_blank"
                rel="noopener noreferrer"
              >
                Victor Veyrier
              </a>
            </NavItem>
            <NavItem className="NavDestock">
              <a
                href="https://www.linkedin.com/in/c%C3%A9cyl-lang-b21948194/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cécyl Lang
              </a>
            </NavItem>
            <NavItem className="NavDestock">
              <a
                href="https://www.linkedin.com/in/malik-himeur-27452b1a3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Malik Himeur
              </a>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="NavMobile">
              <DropdownToggle nav caret>
                Contact Us
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a
                    href="https://www.wildcodeschool.com/fr-FR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wild Code School
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a
                    href="https://fr.linkedin.com/in/victor-veyrier-ab6948194"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Victor Veyrier
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a
                    href="https://www.linkedin.com/in/c%C3%A9cyl-lang-b21948194/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cécyl Lang
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a
                    href="https://www.linkedin.com/in/malik-himeur-27452b1a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Malik Himeur
                  </a>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Close</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarMB;
