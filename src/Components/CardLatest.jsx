import './Header.css'
import pic4 from '../assets/image 1.png'
const CardLatest = () => {
  return (
    <div className='container2'>
        <div className='text1'>
            <div className='info'>
                <h1>long established</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
            </div>
            <div className='info1'>
                <p className='col1'>April 21 2024</p>
                <p>Read More</p>
            </div>
        </div>
        <div className='imageInfo'>
            <img src={pic4} />
        </div>
    </div>
  )
}

export default CardLatest