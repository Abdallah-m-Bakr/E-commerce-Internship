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
            <div className="days bg-danger text-light">71</div><b>:</b>
            <div className="hours bg-danger text-light">14</div><b>:</b>
            <div className="min bg-danger text-light">43</div><b>:</b>
            <div className="sec bg-danger text-light">16</div>
          </div>
        </div>
        <div className="offer-cards border border-danger border-2 rounded d-flex row row-cols-md-5 row-cols-12">
          <div className="offer-card col border border-1">
            <div className="top-card position-relative">
              <img src="/images/img1.jpg" className="col-12" alt="" />
              <div className="offer position-absolute top-0 left-0 m-2">25%</div>
            </div>
            <div className="body-card p-3">
              <h5 className="title">title</h5>
              <div className="rate">
                <div></div>
                <span>1 review</span>
              </div>
              <div className="offer-price d-flex gap-2">
                <div className="before-offer text-decoration-line-through">$9.99</div>
                <div className="after-offer">$7.50</div>
              </div>
              <div className="bar">
                <div className=""></div>
                <hr />
              </div>
              <p className="pt-3 text-center">the available product: <span className="fw-bold fs-3 text-primary">90</span></p>
            </div>
          </div>
          <div className="offer-card col border border-1">
            <div className="top-card position-relative">
              <img src="/images/img1.jpg" className="col-12" alt="" />
              <div className="offer position-absolute top-0 left-0 m-2">25%</div>
            </div>
            <div className="body-card p-3">
              <h5 className="title">title</h5>
              <div className="rate">
                <div></div>
                <span>1 review</span>
              </div>
              <div className="offer-price d-flex gap-2">
                <div className="before-offer text-decoration-line-through">$9.99</div>
                <div className="after-offer">$7.50</div>
              </div>
              <div className="bar">
                <div className=""></div>
                <hr />
              </div>
              <p className="pt-3 text-center">the available product: <span className="fw-bold fs-3 text-primary">90</span></p>
            </div>
          </div>
          <div className="offer-card col border border-1">
            <div className="top-card position-relative">
              <img src="/images/img1.jpg" className="col-12" alt="" />
              <div className="offer position-absolute top-0 left-0 m-2">25%</div>
            </div>
            <div className="body-card p-3">
              <h5 className="title">title</h5>
              <div className="rate">
                <div></div>
                <span>1 review</span>
              </div>
              <div className="offer-price d-flex gap-2">
                <div className="before-offer text-decoration-line-through">$9.99</div>
                <div className="after-offer">$7.50</div>
              </div>
              <div className="bar">
                <div className=""></div>
                <hr />
              </div>
              <p className="pt-3 text-center">the available product: <span className="fw-bold fs-3 text-primary">90</span></p>
            </div>
          </div>
          <div className="offer-card col border border-1">
            <div className="top-card position-relative">
              <img src="/images/img1.jpg" className="col-12" alt="" />
              <div className="offer position-absolute top-0 left-0 m-2">25%</div>
            </div>
            <div className="body-card p-3">
              <h5 className="title">title</h5>
              <div className="rate">
                <div></div>
                <span>1 review</span>
              </div>
              <div className="offer-price d-flex gap-2">
                <div className="before-offer text-decoration-line-through">$9.99</div>
                <div className="after-offer">$7.50</div>
              </div>
              <div className="bar">
                <div className=""></div>
                <hr />
              </div>
              <p className="pt-3 text-center">the available product: <span className="fw-bold fs-3 text-primary">90</span></p>
            </div>
          </div>
          <div className="offer-card col border border-1">
            <div className="top-card position-relative">
              <img src="/images/img1.jpg" className="col-12" alt="" />
              <div className="offer position-absolute top-0 left-0 m-2">25%</div>
            </div>
            <div className="body-card p-3">
              <h5 className="title">title</h5>
              <div className="rate">
                <div></div>
                <span>1 review</span>
              </div>
              <div className="offer-price d-flex gap-2">
                <div className="before-offer text-decoration-line-through">$9.99</div>
                <div className="after-offer">$7.50</div>
              </div>
              <div className="bar">
                <div className=""></div>
                <hr />
              </div>
              <p className="pt-3 text-center">the available product: <span className="fw-bold fs-3 text-primary">90</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home