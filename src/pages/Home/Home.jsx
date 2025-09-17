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
            <Link to="/shop" className="btn px-3">shop now <i className="fas fa-right-long"></i></Link>
          </div>
        </div>
        <div className="tag-line">
          <span><b>100% secure delivery</b> without contacting the couier</span>
          <Link to="/shop" className="btn px-3">shop now</Link>
        </div>
      </div>
      <div className="offer-down">
        <div className="timer d-flex flex-md-row flex-column m-4">
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
        <div className="offer-cards border border-danger border-2 rounded row row-col-12">
          <div className="offer-card col-md-6 col-lg-4 col-xl border border-1">
            <div className="top-card position-relative">
              <img src="/images/proud1.jpg" alt="" />
              <div className="offer position-absolute top-0 left-0 m-2">25%</div>
            </div>
            <div className="body-card p-3">
              <h5 className="title">purple shoes</h5>
              <div className="rate d-flex gap-2">
                <div className="text-warning">5<i className="fas fa-star"></i></div>
                <span>1 review</span>
              </div>
              <div className="offer-price d-flex gap-2">
                <div className="before-offer text-decoration-line-through">$75.00</div>
                <div className="after-offer text-danger fs-5">$56.25</div>
              </div>
              <div className="bar">
                <div style={{ "--width-bar": "70%" }}></div>
              </div>
              <p className="pt-3 text-center">the available products: <span className="fw-bold fs-3 text-primary">70</span></p>
            </div>
          </div>
          <div className="offer-card col-md-6 col-lg-4 col-xl border border-1">
            <div className="top-card position-relative">
              <img src="/images/proud9.jpg" alt="" />
            </div>
            <div className="body-card p-3">
              <h5 className="title">Pullover</h5>
              <div className="rate d-flex gap-2">
                <div className="text-warning">4<i className="fas fa-star"></i></div>
                <span>1 review</span>
              </div>
              <div className="offer-price d-flex gap-2">
                <div className="after-offer text-danger fs-5">$14.50</div>
              </div>
              <div className="bar">
                <div style={{ "--width-bar": "90%" }}></div>
              </div>
              <p className="pt-3 text-center">the available products: <span className="fw-bold fs-3 text-primary">90</span></p>
            </div>
          </div>
          <div className="offer-card col-md-6 col-lg-4 col-xl border border-1">
            <div className="top-card position-relative">
              <img src="/images/proud11.jpg" alt="" />
            </div>
            <div className="body-card p-3">
              <h5 className="title">Varsity Jacket</h5>
              <div className="rate d-flex gap-2">
                <div className="text-warning">4<i className="fas fa-star"></i></div>
                <span>1 review</span>
              </div>
              <div className="offer-price d-flex gap-2">
                <div className="after-offer text-danger fs-5">$10.59</div>
              </div>
              <div className="bar">
                <div style={{ "--width-bar": "50%" }}></div>
              </div>
              <p className="pt-3 text-center">the available products: <span className="fw-bold fs-3 text-primary">50</span></p>
            </div>
          </div>
          <div className="offer-card col-md-6 col-lg-4 col-xl border border-1">
            <div className="top-card position-relative">
              <img src="/images/proud3.jpg" alt="" />
              <div className="offer position-absolute top-0 left-0 m-2">34%</div>
            </div>
            <div className="body-card p-3">
              <h5 className="title">blue shoes</h5>
              <div className="rate d-flex gap-2">
                <div className="text-warning">5<i className="fas fa-star"></i></div>
                <span>1 review</span>
              </div>
              <div className="offer-price d-flex gap-2">
                <div className="before-offer text-decoration-line-through">$80.00</div>
                <div className="after-offer text-danger fs-5">$52.80</div>
              </div>
              <div className="bar">
                <div style={{ "--width-bar": "29%" }}></div>
              </div>
              <p className="pt-3 text-center">the available products: <span className="fw-bold fs-3 text-primary">29</span></p>
            </div>
          </div>
          <div className="offer-card col-md-6 col-lg-4 col-xl border border-1">
            <div className="top-card position-relative">
              <img src="/images/proud19.jpg" alt="" />
              <div className="offer position-absolute top-0 left-0 m-2">35%</div>
            </div>
            <div className="body-card p-3">
              <h5 className="title">Layered Necklace</h5>
              <div className="rate d-flex gap-2">
                <div className="text-warning">5<i className="fas fa-star"></i></div>
                <span>1 review</span>
              </div>
              <div className="offer-price d-flex gap-2">
                <div className="before-offer text-decoration-line-through">$129.99</div>
                <div className="after-offer text-danger fs-5">$84.50</div>
              </div>
              <div className="bar">
                <div style={{ "--width-bar": "12%" }}></div>
              </div>
              <p className="pt-3 text-center">the available products: <span className="fw-bold fs-3 text-primary">12</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-12 my-4 d-flex gap-5">
        <div className="col-12 col-lg rounded p-5 viewer-to-left d-flex flex-column align-items-end" style={{backgroundImage:"url(/images/bg4.jpg)", backgroundSize:"cover" ,backgroundPosition:"0 75%"}}>
          <h3 className="viewer-blur">cave products</h3>
          <p className="viewer-blur" style={{color:"var(--text-color)"}}>text</p>
          <Link to="/shop" className="btn btn-info px-3 rounded-5 viewer-blur">shop now</Link>
        </div>
        <div className="col-12 col-lg rounded p-5 viewer-to-left" style={{backgroundImage:"url(/images/bg3.jpg)", backgroundSize:"cover" ,backgroundPosition:"0 75%"}}>
          <h3 className="viewer-blur">cave products</h3>
          <p className="viewer-blur" style={{color:"var(--text-color)"}}>text</p>
          <Link to="/shop" className="btn btn-danger px-3 rounded-5 viewer-blur">shop now</Link>
        </div>
      </div>
    </div>

  )
}

export default Home