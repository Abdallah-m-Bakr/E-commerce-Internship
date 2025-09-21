import "./Home.css"
import BestSeller from "../../components/BestSeller/bestSeller"
import Slider from "../../components/Slider/Slider"
import Slider2 from "../../components/Slider2/Slider"
import Hero from "../../components/Hero/Hero"
function Home() {
  return (
    <>

{/* hero section */}
<Hero/>
{/* // Slider section */}
<Slider />
{/* // end Slider section */}

{/* // Best Seller section */}
<BestSeller />
{/* // end Best Seller section */}
{/* // Slider2 section */}
<Slider2 />
{/* // end Slider2 section */}

</>
  )
}

export default Home


