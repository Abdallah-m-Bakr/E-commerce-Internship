import "./Blog.css"
import bottle from '../../assets/images/bottle.png'
import facebook from '../../assets/images/facebook_img.png'
import instagram from '../../assets/images/istagram_img.png'
import twitter from '../../assets/images/x_img.png'
import reddit from '../../assets/images/reddit_img.png'
import pinterest from '../../assets/images/printerest_img.png'
import starbucks from '../../assets/images/starbucks.png'
import coffie from '../../assets/images/coffie.png'
function Blog() {
  return (
    <div className="blog-page d-flex justify-content-evenly">
      <div className="left">
        <div className="water-bottle">
          <img src={bottle} alt="water" />
        </div>
        <div className="grocery1 grocery">
          <p className="text-muted">Grocery</p>
          <h2>But i must explain to you how all those mistaken idea</h2>
          <span className="text-muted">jan 13 2025 &nbsp; <span className="text-dark">Sinan ISIK</span> </span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat vero, quis sed ullam nihil deserunt, esse nam quasi repudiandae facilis debitis perspiciatis.</p>
        </div>
        <div className="coffie-nut">
          <img src={coffie} alt="coffie" />
        </div>
        <div className="grocery2 grocery">
          <p className="text-muted">Grocery</p>
          <h2>the problem with typefaces on the web</h2>
          <span className="text-muted">jan 13 2025 &nbsp; <span className="text-dark">Sinan ISIK</span> </span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat vero, quis sed ullam nihil deserunt, esse nam quasi repudiandae facilis debitis perspiciatis.</p>
        </div>
      </div>
      <div className="right">
        <div className="recent-posts mb-4">
          <h2>RECENT POSTS</h2>
          <div className="border p-3">
            <div className="d-flex justify-content-between posts-content">
              <img src={bottle} alt="water" width={40} height={40} />
              <p>But i must explain to you how all those mistaken idea</p>
            </div>
            <div className="d-flex justify-content-between posts-content">
              <img src={coffie} alt="coffie" width={40} height={40} />
              <p>the problem with typefaces on the web</p>
            </div>
          </div>
        </div>
        <div className="social-media mb-4">
          <h2>SOCIAL MEDIA</h2>
          <img src={facebook} alt="facebook" className="rounded" />
          <img src={instagram} alt="instagram"  className="rounded"/>
          <img src={twitter} alt="x"  className="rounded"/>
          <img src={reddit} alt="reddit" className="rounded" />
          <img src={pinterest} alt="pinterest"  className="rounded"/>
        </div>
        <div className="banner">
          <h2>WIDGET BANNER</h2>
          <img src={starbucks} alt="starbucks" />
        </div>
        <div className="tags">
        <h2>Tags</h2>
        <span>ecommerce</span>
        <span>food</span>
        <span>grocery</span>
        <span>kiptheme</span>
        <span>organic</span>
        <span>shop</span>
        <span>shopify</span>
        <span>store</span>
      </div>
      </div>
    </div >
  )
}

export default Blog