import Header from "../Components/Header"
import CardLatest from '../Components/CardLatest'
import HeadSection from '../Components/HeadSection'
import '../App.css'
import Cards from '../Components/Cards'
import HighLightSection from '../Components/HighLightSection'
import SeeMore from '../Components/SeeMore'
import Footer from '../Components/Footer'


const Combine = () => {
  return (
    <>
    <div className="main">
    <Header  />
    <HeadSection />
    <CardLatest />
    <Cards />
    <HighLightSection />
    <SeeMore />
    <Footer />
    </div>
    </>
    
  )
}

export default Combine