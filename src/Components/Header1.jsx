import './Header1.css'
import pic from '../assets/linkedin-box-fill 1.png'
import pic1 from '../assets/twitter-fill 1.png'
import pic2 from '../assets/Vector.png'
import { Link } from 'react-router-dom'

const Header1 = () => {
  return (
    <div className="container3">
        <div className="logo3">
            <p>HotCoffee</p>
        </div>
        <div className="icons3">
        <Link to={"/"}><p>Home</p></Link>
            <p>Post</p>
            <img src={pic2}/>
            <img src={pic1} />
            <img src={pic}/>
            
        </div>
    </div>
  )
}

export default Header1