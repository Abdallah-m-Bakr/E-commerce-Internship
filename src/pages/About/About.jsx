import "./About.css"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
function About() {
   const { t, i18n } = useTranslation();
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [i18n]);
  return (
    <div className="about-container">
      <div className="img-heder"><img src="../src/assets/images/IMG_٢٠٢٥٠٩١٩_١٥٠٩٣٩.png" alt="" /></div>
       <div className="poop-heder">
         <span>{t("We are a passionate team dedicated to fashion and style since our founding in 2020. Our journey began with a simple idea: to provide clothing and accessories that meet everyone’s needs at affordable prices and modern designs. Over the years, we’ve grown to become one of the leading players in e-commerce, always aiming to deliver an exceptional shopping experience that combines high quality and striking elegance. ")}</span>
         <h2 className="span-col">{t("Our Vision and Goals")}</h2>
         <h6 className="span-col">{t("We aspire to be the preferred destination for fashion enthusiasts in the region. We aim to expand our collection to include over 500 new products each season, focusing on sustainability and quality. We also strive to offer outstanding customer service, ensuring fast shipping and a hassle-free 30-day return policy.")}</h6>
         <div className="span-img"></div>
         <h3>{t("Our Story")}</h3>
                <p className="cspan-2">{t("It all started in a small room where we combined our love for design with the goal of building a trusted brand. Over time, we grew thanks to the support of our loyal customers, who inspired us to keep innovating. Today, we’re proud to have over 10,000 satisfied customers, and we aim to reach many more.")}</p>
                <h3>{t("Get in Touch")}</h3>
                <p className="foter-span">{t("If you’d like to join our journey or have any suggestions, feel free to visit us at 10 Nile Street, Cairo, or call us at +20 123 456 7890, or email us at info@fashionhub.com. Additional Notes: We continuously improve our services based on your feedback. Follow us on social media for the latest news and offers!")}</p>
       </div>
    </div>
  )
}

export default About