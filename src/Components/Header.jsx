import './Header.css'
import pic from '../assets/linkedin-box-fill 1.png'
import pic1 from '../assets/twitter-fill 1.png'
import pic2 from '../assets/Vector.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className="container">
        <div className="logo">
            <p>GreatZone</p>
        </div>
        <div className="icons">
          <p>Home</p>
           <Link to={"/post"}><p>Post</p></Link>
            <img src={pic2}/>
            <img src={pic1} />
            <img src={pic}/>
            
        </div>
    </div>
  )
}

export default Header