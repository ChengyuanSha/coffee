import CoffeeButton from './CoffeeButton'
import TempButton from './TempButton'
import coffee1 from '../assets/coffee1.jpg'
import coffee2 from '../assets/coffee2.jpg'
import coffee3 from '../assets/coffee3.jpg'
import coffee4 from '../assets/coffee4.jpg'
import coffee5 from '../assets/coffee5.jpg'
import coffee6 from '../assets/coffee6.jpg'

const Body = () => {
  return (
    <div>
        <div className="body">
        <CoffeeButton color='blue' text='LATTE' coffeeImgPath={coffee1}/>
        <CoffeeButton color='blue' text='CAPPUCCINO' coffeeImgPath={coffee2}/>
        <CoffeeButton color='blue' text='ESPRESSO' coffeeImgPath={coffee3}/>
        </div>
        <h2 className='bodyTxt'>Choose a temperature</h2>
        <div className="body">
        <TempButton color='blue' text='Low' coffeeImgPath={coffee4}/>
        <TempButton color='blue' text='Med' coffeeImgPath={coffee5}/>
        <TempButton color='blue' text='High' coffeeImgPath={coffee6}/>
        </div>
    </div>
  )
}

export default Body