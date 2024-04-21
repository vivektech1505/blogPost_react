import './Header.css'
import pic4 from '../assets/image 7.png'

function HighLightSection() {
  return (
    <div className='highlight-container'>
        <div className='highlight-item'>
            <div className='item-info'>
                <h1>What is Lorem Ipsum?</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
            </div>
            <div className='button-info'>
                <p>April 24</p>
                <p>Read More</p>
            </div>
        </div>
        <div className='image-info'>
            <img src={pic4}/>
        </div>
    </div>
  )
}

export default HighLightSection