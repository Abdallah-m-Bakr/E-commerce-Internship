import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
function Navbar() {

  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "#49BFAA" : "",
      backgroundColor: isActive ? "#F0FAFF" : ""
    }
  };
  return (
    <>
      <div>
        {/* اول حاجة خالص في الصفحة */}
        <div className='dueto '>
          <p className="duetotext text-light">Due to current circumstances, there may be slight delays in order processing</p>
        </div>
        {/* 1st navbar */}
        <div className="container d-flex pt-2 first-navbar">
          {/* navs */}
          <div>
            <ul className='d-flex justify-content-evenly navul-1'>
              <li><NavLink to="/about" >About Us</NavLink></li>
              <li><NavLink >Compare</NavLink></li>
              <li><NavLink >Wishlist</NavLink></li>
            </ul>
          </div>
          {/* text */}
          <div className="d-flex justify-content-end text-for-navbar">
            <div className="secure-delivery d-flex text-muted">
              <i class="fa-solid fa-user-shield pt-1"></i>
              <p>100% secure delivery without contacting the courier</p>
            </div>
            <div className="d-flex">
              <div className="line-vertical pt-3 "></div>
              <p className="text-muted">Need help? call us:<b className="number">+00200 500</b></p>
              <div className="line-vertical pt-3 "></div>
            </div>
            {/* dropdown */}
            <div className="selection">
              <select className="select">
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
              </select>
            </div>
          </div>
        </div>
        {/* line */}
        <hr className="horizontail-line pt-1"/>

        <div className='header d-flex justify-content-between container '>
          <img className='img' src={logo} alt='logo' width={200} height={80} />
          {/* search */}
          <div className="input-text border-0 rounded d-flex justify-content-between" >
            <input className='search border-0' type="text" placeholder="Search for products, fruit, meet, eggs, etc..." />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          {/* user $ price & cart*/}
          <div className="user-price-cart d-flex justify-content-evenly">
            <div className="user"><i class="fa-solid fa-user"></i></div>
            <div className="price"><p>$0.00</p></div>
            <div className="cart">
              <i class="fa-solid fa-bucket"></i>
              <span className="number-cart">0</span></div>
          </div>
        </div>
        
        {/* 2nd navbar */}
        <div className="navbar2 container">
          <ul className='d-flex justify-content-evenly navul'>
            <li><NavLink style={activeStyle} to="/" >HOME</NavLink></li>
            <li><NavLink style={activeStyle} to="/shop" >SHOP</NavLink></li>
            <li><NavLink style={activeStyle} to="/blog" >BLOG</NavLink></li>
            <li><NavLink style={activeStyle} to="/contact" >CONTACT</NavLink></li>
            <li><NavLink style={activeStyle} to="/login" >LOG IN</NavLink></li>
            <li><NavLink style={activeStyle} to="/register" >REGISTER</NavLink></li>
          </ul>
        </div>
      </div>
      <hr className="horizontail-line pt-1"/>
    </>

  )
}

export default Navbar