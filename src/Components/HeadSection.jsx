import './Header.css'
import pic3 from '../assets/group.png'

const HeadSection = () => {
  return (
    <div className='container1'>
        <div className='text'>
            <h1>Make Zone Better !</h1>
            <p>Why Better Zone Important ?</p>
        </div>
        <div className='imageItem'>
            <img src={pic3}/>
        </div>
    </div>
  )
}

export default HeadSection