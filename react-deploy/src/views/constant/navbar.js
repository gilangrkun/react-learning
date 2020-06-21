import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavItem,
} from "reactstrap";
import "../constant/css/fontcss.css";

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <div>
        <Navbar
          className="fixed-top navbar-dark container"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <NavbarToggler
            style={{ outline: "none" }}
            onClick={this.toggle}
            className="mr-2"
          />
          <NavbarBrand
            style={{ outline: "none" }}
            href="/"
            className="mr-auto b612"
          >
            Kuntiarso
          </NavbarBrand>
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink style={{ outline: "none" }} href="/">
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ outline: "none" }}
                  href="https://github.com/gilangrkun"
                  target="_blank"
                >
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ outline: "none" }}
                  href="https://twitter.com/gilangrkun"
                  target="_blank"
                >
                  Twitter
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
