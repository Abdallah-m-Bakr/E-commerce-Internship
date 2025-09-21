import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { useTranslation } from 'react-i18next';
import { useState , useEffect } from "react";
import '../../i18n.jsx';
function Navbar() {

  // active link
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "#49BFAA" : "",
      backgroundColor: isActive ? "#F0FAFF" : ""
    }
  };
 // تغيير اللغة و الاتجاه
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  return savedLanguage || 'English';
}
);

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    try {
      if (language === 'English') {
        i18n.changeLanguage('en');
        document.body.dir = 'ltr';
      } else if (language === 'Arabic') {
        i18n.changeLanguage('ar');
        document.body.dir = 'rtl';
      }
      localStorage.setItem('selectedLanguage', language);
      console.log('Current language:', i18n.language); // للتصحيح
    } catch (error) {
      console.error('Error changing language:', error); // التقاط الأخطاء
    }
  };
  // تهيئة اللغة عند تحميل الصفحة
useEffect(() => {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    setSelectedLanguage(savedLanguage);
    if (savedLanguage === 'English') {
      i18n.changeLanguage('en');
      document.body.dir = 'ltr';
    } else if (savedLanguage === 'Arabic') {
      i18n.changeLanguage('ar');
      document.body.dir = 'rtl';
    }
  }
}, [i18n]);

  return (
    <>
      <div>

        {/* اول حاجة خالص في الصفحة */}
        <div className='dueto '>
          <p className="duetotext text-light">{t("Due to current circumstances, there may be slight delays in order processing")}</p>
        </div>
        {/* 1st navbar */}
        <div className="container d-flex pt-2 first-navbar">
          {/* navs */}
          <div>
            <ul className='d-flex justify-content-evenly navul-1'>
              <li><NavLink to="/about" >{t("About Us")}</NavLink></li>
            </ul>
          </div>
          {/* text */}
          <div className="d-flex justify-content-end text-for-navbar">
            <div className="secure-delivery d-flex text-muted">
              <i class="fa-solid fa-user-shield pt-1"></i>
              <p>{t("100% secure delivery without contacting the courier")}</p>
            </div>
            <div className="d-flex">
              <div className="line-vertical pt-3 "></div>
              <p className="text-muted">{t("Need help? call us:")}<b className="number">+00200 500</b></p>
              <div className="line-vertical pt-3 "></div>
            </div>
            {/* dropdown */}
            <div className="selection">
              <select className="select" value={selectedLanguage}  onChange={handleLanguageChange}>
                <option value="English">English</option>
                <option value="Arabic">عربي</option>
              </select>
            </div>
          </div>
        </div>
        {/* line */}
        <hr className="horizontail-line pt-1" />

        <div className='header d-flex justify-content-between container '>
          <img className='img' src={logo} alt='logo' width={200} height={80} />
          {/* search */}
          <div className="input-text border-0 rounded d-flex justify-content-between" >
            <input className='search border-0' type="text" placeholder={t("Search for products, fruit, meet, eggs, etc...")} />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          {/* user $ price & cart*/}
          <div className="user-price-cart d-flex justify-content-evenly">
            <div className="user">
              <NavLink to="/profile" ><i class="fa-solid fa-user"></i></NavLink>
              {/* <i class="fa-solid fa-user"></i> */}
            </div>
            <div className="price"><p>$0.00</p></div>
            <div className="cart">
              <NavLink to="/cart" ><i class="fa-solid fa-bucket"></i></NavLink>

              {/* <i class="fa-solid fa-bucket"></i> */}
              <span className="number-cart">0</span></div>
          </div>
        </div>

        {/* 2nd navbar */}
        <div className="navbar2 container">
          <ul className='d-flex justify-content-evenly navul'>
            <li><NavLink style={activeStyle} to="/" >{t("HOME")}</NavLink></li>
            <li><NavLink style={activeStyle} to="/shop" >{t("SHOP")}</NavLink></li>
            <li><NavLink style={activeStyle} to="/blog" >{t("BLOG")}</NavLink></li>
            <li><NavLink style={activeStyle} to="/contact" >{t("CONTACT")}</NavLink></li>
            <li><NavLink style={activeStyle} to="/login" >{t("LOGIN")}</NavLink></li>
            <li><NavLink style={activeStyle} to="/register" >{t("REGISTER")}</NavLink></li>
          </ul>
        </div>
      </div>
      <hr className="horizontail-line pt-1" />
    </>

  )
}

export default Navbar