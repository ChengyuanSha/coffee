import CoffeeButton from './CoffeeButton'
import CoffeeButtonname0 from '../assets/coffee1.jpg'
import CoffeeButtonname1 from '../assets/coffee2.jpg'
import CoffeeButtonname2 from '../assets/coffee3.jpg'
import CoffeeButtonname3 from '../assets/coffee3.jpg'
import TempButton from './TempButton'
import TempButtonname0 from '../assets/coffee4.jpg'
import TempButtonname1 from '../assets/coffee5.jpg'
import TempButtonname2 from '../assets/coffee6.jpg'
import TempButton2 from './TempButton2'
import TempButton2name0 from '../assets/coffee4.jpg'
import TempButton2name1 from '../assets/coffee5.jpg'
import TempButton2name2 from '../assets/coffee6.jpg'
const Body = () => {
  return (
    <div>
            <h2 className='bodyTxt'>Choose a Coffee</h2>
        <div className="body">
        <CoffeeButton color='blue' text='Expresso' ImgPath={CoffeeButtonname0}/>
<CoffeeButton color='blue' text='Americano' ImgPath={CoffeeButtonname1}/>
<CoffeeButton color='blue' text='Latte' ImgPath={CoffeeButtonname2}/>
<CoffeeButton color='blue' text='Latte' ImgPath={CoffeeButtonname3}/>

        </div>        <h2 className='bodyTxt'>Choose a temperature</h2>
        <div className="body">
        <TempButton color='blue' text='High' ImgPath={TempButtonname0}/>
<TempButton color='blue' text='Med' ImgPath={TempButtonname1}/>
<TempButton color='blue' text='Low' ImgPath={TempButtonname2}/>

        </div>        <h2 className='bodyTxt'>Choose a temperature2</h2>
        <div className="body">
        <TempButton2 color='blue' text='High' ImgPath={TempButton2name0}/>
<TempButton2 color='blue' text='Med' ImgPath={TempButton2name1}/>
<TempButton2 color='blue' text='Low' ImgPath={TempButton2name2}/>

        </div>
    </div>
  )
}

export default Body