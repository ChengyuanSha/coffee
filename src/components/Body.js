import CoffeeButton from './CoffeeButton'

const Body = () => {
  return (
    <div className="body">
        <CoffeeButton color='blue' text='LATTE'/>
        <CoffeeButton color='blue' text='CAPPUCCINO'/>
        <CoffeeButton color='blue' text='ESPRESSO'/>
        <CoffeeButton color='blue' text='MOCHA'/>
    </div>
  )
}

export default Body