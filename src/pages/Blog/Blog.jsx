import "./Blog.css"
import bottle from '../../assets/images/bottle.png'
import facebook from '../../assets/images/facebook_img.png'
import instagram from '../../assets/images/istagram_img.png'
import twitter from '../../assets/images/x_img.png'
import reddit from '../../assets/images/reddit_img.png'
import pinterest from '../../assets/images/printerest_img.png'
import starbucks from '../../assets/images/starbucks.png'
import coffie from '../../assets/images/coffie.png'
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
function Blog() {

  const {t,i18n}=useTranslation();
  useEffect(() => {
    i18n.changeLanguage('ar'); // لتغيير اللغة إلى العربية 
  },[i18n])


  return (
    <div className="blog-page d-flex justify-content-evenly">
      <div className="left">
        <div className="water-bottle">
          <img src={bottle} alt="water" />
        </div>
        <div className="grocery1 grocery">
          <p className="text-muted">{t("Grocery")}</p>
          <h2>{t("But i must explain to you how all those mistaken idea")}</h2>
          <span className="text-muted">jan 13 2025 &nbsp; <span className="text-dark">{t("Sinan ISIK")}</span> </span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat vero, quis sed ullam nihil deserunt, esse nam quasi repudiandae facilis debitis perspiciatis.</p>
        </div>
        <div className="coffie-nut">
          <img src={coffie} alt="coffie" />
        </div>
        <div className="grocery2 grocery">
          <p className="text-muted">{t("Grocery")}</p>
          <h2>{t("the problem with typefaces on the web")}</h2>
          <span className="text-muted">jan 13 2025 &nbsp; <span className="text-dark">{t("Sinan ISIK")}</span> </span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat vero, quis sed ullam nihil deserunt, esse nam quasi repudiandae facilis debitis perspiciatis.</p>
        </div>
      </div>
      <div className="right">
        <div className="recent-posts mb-4">
          <h2>{t("RECENT POSTS")}</h2>
          <div className="border p-3">
            <div className="d-flex justify-content-between posts-content">
              <img src={bottle} alt="water" width={40} height={40} />
              <p>{t("But i must explain to you how all those mistaken idea")}</p>
            </div>
            <div className="d-flex justify-content-between posts-content">
              <img src={coffie} alt="coffie" width={40} height={40} />
              <p>{t("the problem with typefaces on the web")}</p>
            </div>
          </div>
        </div>
        <div className="social-media mb-4">
          <h2>{t("SOCIAL MEDIA")}</h2>
          <img src={facebook} alt="facebook" className="rounded" />
          <img src={instagram} alt="instagram"  className="rounded"/>
          <img src={twitter} alt="x"  className="rounded"/>
          <img src={reddit} alt="reddit" className="rounded" />
          <img src={pinterest} alt="pinterest"  className="rounded"/>
        </div>
        <div className="banner">
          <h2>{t("WIDGET BANNER")}</h2>
          <img src={starbucks} alt="starbucks" />
        </div>
        <div className="tags">
        <h2>{t("Tags")}</h2>
        <span>{t("ecommerce")}</span>
        <span>{t("food")}</span>
        <span>{t("Grocery")}</span>
        <span>{t("kiptheme")}</span>
        <span>{t("organic")}</span>
        <span>{t("shop")}</span>
        <span>{t("shopify")}</span>
        <span>{t("store")}</span>
      </div>
      </div>
    </div >
  )
}

export default Blog