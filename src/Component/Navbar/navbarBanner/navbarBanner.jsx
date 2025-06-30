import React from "react";
import "./navbarBanner.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";

const NavbarBanner = () => {
  const options = [
    { name: "Fresh" },
    { name: "Amazon miniT" },
    { name: "Sell", link: "/productsell" },
    { name: "Best Sellers" },
    { name: "Today's Deals" },
    { name: "Mobiles" },
    { name: "Electronics", link: "ProductsElectronics" },
    { name: "Prime" },
    { name: "Customer Service" },
    { name: "Fashion" },
    { name: "Home & Kitchen" },
  ];
  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">
        <div className="optionsNavbarBanner">
          <MenuOutlinedIcon sx={{ fontSize: "24px" }} />
          <div className="allOptionsNavbarBanner">All</div>
        </div>
        {options.map((item, ind) =>
          item.link ? (
            <Link to={item.link} className="optionsNavbarBanner" key={ind}>
              <div className="allOptionsNavbarBanner">{item.name}</div>
            </Link>
          ) : (
            <div className="optionsNavbarBanner" key={ind}>
              <div className="allOptionsNavbarBanner">{item.name}</div>
            </div>
          )
        )}
      </div>
      <div className="navbarBannerRightSide"></div>
    </div>
  );
};

export default NavbarBanner;