import React, { useRef, useState, useEffect } from "react";
import "./navbarBelt.css";
import amazonLogo from "../../../Assets/amazonLogo.png";
import nepal from "../../../Assets/nepal.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const options = [
  "All",
  "All Departments",
  "Arts & Crafts",
  "Automotive",
  "Baby",
  "Beauty & Personal Care",
  "Books",
  "Boys' Fashion",
  "Computers",
  "Deals",
  "Digital Music",
  "Electronics",
  "Girls' Fashion",
  "Health & Household",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Kindle Store",
  "Luggage",
  "Men's Fashion",
  "Movies & TV",
  "Music, CDs & Vinyl",
];

const NavbarBelt = () => {
  const [selected, setSelected] = useState(options[0]);
  const spanRef = useRef(null);
  const [selectWidth, setSelectWidth] = useState(0);

  useEffect(() => {
    if (spanRef.current) {
      setSelectWidth(spanRef.current.offsetWidth + 40); // 40px for padding & arrow
    }
  }, [selected]);

  const cartItems = useSelector((state)=> state.cart.items);
  return (
    <div className="navbarBelt">
      <div className="leftNavBelt">
        <div className="leftNavBeltLogo">
          <Link to="/Homescreen/homeScreen">
            <img className="amazonLogoNavbar" src={amazonLogo} alt="amazonLogo" />
          </Link>
          <span className="navbar_inLogo">.np</span>
        </div>
        <div className="navbarBeltLocation">
          <div className="navbarBeltLocationImg">
            <LocationOnOutlinedIcon
              className="navbarBeltLocationImgIcon"
              sx={{ fontSize: "22px" }}
            />
          </div>
          <div className="navbarBeltLocationPlace">
            <div className="navbarBeltLocationTop">Delevar to Kathmandu</div>
            <div className="navbarBeltLocationBottom">Nepal</div>
          </div>
        </div>
      </div>
      <div className="navbarBeltSearchBox">
        <div className="navbarBeltSearchDiv">
          <div
            className="navbarBeltSearchBoxAll"
            style={{ position: "relative" }}
          >
            <select
              className="navbarBeltSearchBoxAllSelect"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              style={{ width: selectWidth }}
            >
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <span
              ref={spanRef}
              style={{
                position: "absolute",
                visibility: "hidden",
                height: 0,
                whiteSpace: "pre",
                fontSize: "14px",
                fontFamily: "inherit",
                fontWeight: "normal",
              }}
            >
              {selected}
            </span>
            <ArrowDropDownOutlinedIcon
              sx={{
                fontSize: "20px",
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            />
          </div>
          <input
            type="text"
            className="navbarBeltInputSearchBox"
            placeholder="Search Amazon.np"
          />
          <div className="searchIconNavbarBelt">
            <SearchIcon
              sx={{ fontSize: "26px" }}
              className="searchIconNavbarBeltIcon"
            />
          </div>
        </div>
      </div>

      <div className="rightSideNavbarBelt">
        <div className="nepalFlagCode">
          <img src={nepal} alt="contry" className="nepalFlag" />
          <div className="nepalCodeNavbarBelt">
            EN
            <ArrowDropDownOutlinedIcon
              sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }}
              className="nepalCodeNavbarBeltDrp"
            />
          </div>
        </div>

        <div className="helloSignInNavbaeBelt">
          <div className="helloTopNavbarBelt">Hello,User</div>
          <div className="nepalCodeNavbarBelt">Accounts & Lists</div>
          <div className="amazonDropDown">
              <Link to={'signIn'} className="amazon-dropdown-item">Sign In</Link>
              <Link to={'signUp'} className="amazon-dropdown-item">Create account</Link>              
              <Link to={'signOut'} className="amazon-dropdown-item">Sign Out</Link>
              </div>
        </div>

        <div className="helloSignInNavbaeBelt">
          <div className="helloTopNavbarBelt">Returns</div>
          <div className="nepalCodeNavbarBelt">& Orders</div>
        </div>
        <Link to={'/cart'} className="helloSignInNavbaeBelt">
          <span className="cartItemNumberNavbarBelt">{cartItems.length}</span>
          <div className="helloTopNavbarBelt">
            <ShoppingCartOutlinedIcon />
            <span className="cartTitle">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarBelt;
