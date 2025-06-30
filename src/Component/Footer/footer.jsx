import React, { useState, useRef, useEffect } from "react";
import "./footer.css";
import amazonLogo from "../../Assets/amazonLogo.png";
const languages = [
  { label: "English - EN", value: "en" },
  { label: "español - ES", value: "es" },
  { label: "العربية - AR", value: "ar" },
  { label: "Deutsch - DE", value: "de" },
  { label: "עברית - HE", value: "he" },
  { label: "한국어 - KO", value: "ko" },
  { label: "português - PT", value: "pt" },
  { label: "中文 (简体) - ZH", value: "zh-cn" },
  { label: "中文 (繁體) - ZH", value: "zh-tw" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const audioRef = useRef(null);

    const [showLang, setShowLang] = useState(false);
    const langRef = useRef(null);

  // Hide dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLang(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <footer className="footer">
      <div
        className="footerBackToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </div>
      <div className="footerContent">
        <div className="footerColumn">
          <h4>Get to Know Us</h4>
          <ul>
            <li>Careers</li>
            <li><a href="https://www.aboutamazon.com/">Blog</a></li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li>&rsaquo; See More Make Money with Us</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h4>Let Us Help You</h4>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates &amp; Policies</li>
            <li>Returns &amp; Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <img src={amazonLogo} alt="Amazon" className="footerLogo" />
        <div className="footerBottomOptions">
          <div className="footerLangDropdownWrapper" ref={langRef}>
            <button
              className="footerBtn"
              onClick={() => setShowLang((v) => !v)}
            >
              🌐 English
              <span style={{ marginLeft: 6 }}>▼</span>
            </button>
            {showLang && (
              <div className="footerLangDropdown">
                <div className="footerLangDropdownTitle">Change language <a href="#">Learn more</a></div>
                <form>
                  {languages.map((lang, idx) => (
                    <label key={lang.value} className="footerLangOption">
                      <input
                        type="radio"
                        name="footerLang"
                        defaultChecked={idx === 0}
                        readOnly
                      />
                      {lang.label}
                    </label>
                  ))}
                </form>
              </div>
            )}
          </div>
          <button className="footerBtn">₹ INR - Indian Rupee</button>
          <button className="footerBtn">🇺🇸 United States</button>
        </div>
      </div>
      <div className="footerLegal">
        <div className="footerLegalBottomLinks">
      <span>Conditions of Use</span>
      <span>Privacy Notice</span>
      <span>Consumer Health Data Privacy Disclosure</span>
      <span>Your Ads Privacy Choices <img src="https://m.media-amazon.com/images/G/01/adlp/legal/choices-icon.svg" alt="Ad Choices" style={{height: "16px", verticalAlign: "middle"}} /></span>
    </div>
    <div className="footerLegalCopyright">
      &copy; 1996-{year}, Amazon.com, Inc. or its affiliates
    </div>
      </div>

    </footer>
  );
};

export default Footer;
