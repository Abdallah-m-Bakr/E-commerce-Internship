import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
function Navbar() {
  return (
    <>
      <div>
        {/* اول حاجة خالص في الصفحة */}
        <div className='dueto '>
          <p className="duetotext text-light">Due to current circumstances, there may be slight delays in order processing</p>
        </div>
        {/* 1st navbar */}
        <div className="container d-flex">
          {/* navs */}
          <div>
            <ul className='d-flex '>
              <li><NavLink >About Us</NavLink><div className='linenav'></div></li>
              <li><NavLink >Compare</NavLink><div className='linenav'></div></li>
              <li><NavLink >Wishlist</NavLink><div className='linenav'></div></li>
            </ul>
          </div>
          {/* text */}
          <div className="secure-delivery d-flex text-muted">
            <i class="fa-solid fa-user-shield pt-1"></i>
            <p>100% secure delivery without contacting the courier</p>
          </div>
          <div className="d-flex">
            <div className="line-vertical "></div>
            <p className="text-muted">Need help? call us:<b className="number">+00200 500</b></p>
          </div>
          {/* dropdown */}
          <div className="selection">
            <select className="select">
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </select>
            <select className="select">
              <option >USD</option>
              <option >EUR</option>
              <option >EGP</option>
              <option >GBP</option>
              <option >AED</option>
              <option >KWD</option>
              <option >SAR</option>
            </select>
          </div>
        </div>

        <div className='header d-flex justify-content-between container '>
          <img className='img' src={logo} alt='logo' width={200} height={80} />
          {/* search */}
          <div className="input-text border rounded" >
            <input className='search border-0' type="text" placeholder="Search for products, fruit, meet, eggs, etc..." />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          {/* user $ price & cart*/}
          <div className="user-price-cart d-flex justify-content-evenly">
            <div className="user"><i class="fa-solid fa-user"></i></div>
            <div className="price">$0.00</div>
            <div className="cart">
              <i class="fa-solid fa-bucket"></i>
              <span className="number-cart">0</span></div>
          </div>
        </div>
        {/* 2nd navbar */}
        <div className="d-flex justify-content-between navbar2">
         <div className="TotalProducts">
          <div className="d-flex justify-content-evenly allcategories">
          <i class="fa-solid fa-bars "></i>
          <p>ALL CATEGORIES</p>
          <i class="fa-solid fa-chevron-down "></i>
          </div>
          <p className="total50 text-muted">TOTAL 50 PRODUCTS</p>
         </div>
          
          <ul className='d-flex justify-content-evenly navul'>
            <li><NavLink >HOME</NavLink></li>
            <li><NavLink >SHOP</NavLink></li>
            <li><NavLink >BLOG</NavLink></li>
            <li><NavLink >CONTACT</NavLink></li>
          </ul>

        </div>
      </div>
    </>

  )
}

export default Navbar