import './Header.css'
import pic from '../assets/linkedin-box-fill 1.png'
import pic1 from '../assets/twitter-fill 1.png'
import pic2 from '../assets/Vector.png'

const Header = () => {
  return (
    <div className="container">
        <div className="logo">
            <p>GreatZone</p>
        </div>
        <div className="icons">
            <p>Home</p>
            <p>Post</p>
            <img src={pic2}/>
            <img src={pic1} />
            <img src={pic}/>
            
        </div>
    </div>
  )
}

export default Header