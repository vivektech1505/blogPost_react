import './Header1.css'
import pic from '../assets/linkedin-box-fill 1.png'
import pic1 from '../assets/twitter-fill 1.png'
import pic2 from '../assets/Vector.png'

function Footer1() {
  return (
    <div className="footer1">
        <div className="logo2">
            <p>GreatZone 2022 copyright all rights reserved</p>
        </div>
        <div className="footer2">
            <img src={pic2}/>
            <img src={pic1} />
            <img src={pic}/>
            
        </div>
    </div>
    
  )
}

export default Footer1