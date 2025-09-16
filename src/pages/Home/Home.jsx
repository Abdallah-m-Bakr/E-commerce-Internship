import "./Home.css"
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="container">
      {/* hero section */}
      <div className="hero text-capitalize">
        <div className="slid">
          <div className="cont-slid">
            <div className="line-offer">
              <p>EXCLUSIVE OFFER</p>
              <span>-20% OFF</span>
            </div>
            <h2 className="fw-bold fs-1">specialist in the grocery store</h2>
            <p>only this week.don't miss...</p>
            <span>from</span><span className="fw-bold fs-2 text-danger">$7.99</span><br/>
            <Link to="#" className="btn px-3">shop now <i className="fas fa-right-long"></i></Link>
          </div>
        </div>
        <div className="tag-line">
          <span><b>100% secure delivery</b> without contacting the couier</span>
          <Link to="#" className="btn px-3">shop now</Link>
        </div>
      </div>
      <div className="offer-down">
        <div className="timer">
          <span>
            <h4 className="text-primary">special offers of the week!</h4>
            <p>ut placerat, magna quis porttitor vulputate, magna nunc ante.</p>
          </span>
          <div className="counter">
            <div className="days bg-danger text-light">71</div><span>:</span>
            <div className="hours bg-danger text-light">14</div><span>:</span>
            <div className="min bg-danger text-light">43</div><span>:</span>
            <div className="sec bg-danger text-light">16</div>
          </div>
        </div>
        <div className="offer-cards">
          <div className="offer-card">
            <div className="top-card">
              {/* <img src="/public/images/img1.jpg" alt="" /> */}
              <div className="offer">25%</div>
            </div>
            <div className="body-card">
              <h5 className="title">title</h5>
              <div className="rite"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home