import PropTypes from 'prop-types'
import coffee1 from '../assets/coffee1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'



const CoffeeButton = ({color, text}) => {

  function saveData(name) {
    // save data to user session
    let obj = {'coffee_type': name, 'date': new Date().toLocaleString() + ''};
    localStorage.setItem('CoffeeData', JSON.stringify(obj));
    // console.log("Saved: " + JSON.stringify(obj))
  }

  return (
    <div>
    <Button onClick={() => saveData(text)} 
    style={{backgroundColor:color, backgroundImage: `url(${coffee1})`}}
    variant="outline-light"
    className="rbtn"
    >
    {text}
    </Button>
    {/* <AddButton/> */}
    </div>
  )
}


CoffeeButton.defaultProps = {
    color: 'steelblue'
}

CoffeeButton.propType = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default CoffeeButton