/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-scroll"; // import from react-scroll
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", to: "home" },
    { text: "About", to: "about" },
    {text: "Work", to: "work"},
    { text: "Trustees", to: "trustees" }
  ];

  const offsetValue = -70; // Adjust this value based on your header height

  return (
    <nav>
      {/* Logo */}
      <div className="nav-logo-container">
        <Link to="home" smooth={true} duration={500} offset={offsetValue}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Desktop Navbar Links */}
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <Link
            key={item.text}
            to={item.to}
            smooth={true}
            duration={500}
            offset={offsetValue}
          >
            {item.text}
          </Link>
        ))}
        <Link to="application-form" smooth={true} duration={500} offset={offsetValue}>
    <button className="primary-button">Apply Now</button>
  </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* Drawer Menu for Mobile */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={offsetValue}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
