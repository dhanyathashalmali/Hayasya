/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-scroll"; // import from react-scroll
import Logo from "../Assets/Logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, to: "home" },
    { text: "About", icon: <InfoIcon />, to: "about" },
    { text: "Testimonials", icon: <CommentRoundedIcon />, to: "testimonial" },
    { text: "Contact", icon: <PhoneRoundedIcon />, to: "contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, to: "cart" }, // Cart will work as a section here
  ];

  return (
    <nav>
      {/* Logo */}
      <div className="nav-logo-container">
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Desktop Navbar Links */}
      <div className="navbar-links-container">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="testimonial" smooth={true} duration={500}>Testimonials</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
        <Link to="cart" smooth={true} duration={500}>
          <BsCart2 className="navbar-cart-icon" />
        </Link>
        <button className="primary-button">Bookings Now</button>
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
                <ListItemButton component={Link} to={item.to} smooth={true} duration={500}>
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
