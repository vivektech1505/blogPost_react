import './Header.css'
import pic from '../assets/linkedin-box-fill 1.png'
import pic1 from '../assets/twitter-fill 1.png'
import pic2 from '../assets/Vector.png'

const Footer = () => {
  return (
    <div className="footer11">
        <div className="logo11">
            <p>GreatZone 2022 copyright all rights reserved</p>
        </div>
        <div className="footer12">
            <img src={pic2}/>
            <img src={pic1} />
            <img src={pic}/>
            
        </div>
    </div>
    
  )
}

export default Footer