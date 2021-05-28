import React from "react";
import {
    DropdownItem,
    Icon,
    InputItem,
    Item,
    Logo,
    LogoText,
    Sidebar
} from "react-sidebar-ui";
import logo from "../Assets/Images/logo.png";
const Menubar = () => {
  return (
    <div>
      <Sidebar bgColor="black" isCollapsed={false}>
        <Logo image={logo} imageName="react logo" />
        <LogoText>CADER GROCERY</LogoText>
        <DropdownItem values={["First", "Second", "Third"]} bgColor={"black"}>
          Menu
        </DropdownItem>

        <Item bgColor="black">
          <Icon>
            <i className="fas fa-home" />
          </Icon>
          Home
        </Item>
        <Item bgColor="black">
          <Icon>
            <i className="fas fa-info" />
          </Icon>
          About
        </Item>
        <Item bgColor="black">
          <Icon>
            <i className="fas fa-sitemap" />
          </Icon>
          My Website
        </Item>
        <Item bgColor="black">
          <Icon>
            <i className="far fa-address-book" />
          </Icon>
          Contacts
        </Item>
        <Item bgColor="black">
          <Icon>
            <i className="fas fa-rss-square" />
          </Icon>
          Blog
        </Item>
        <InputItem type="text" placeholder={"Search..."} />
      </Sidebar>
    </div>
  );
};
export default Menubar;
