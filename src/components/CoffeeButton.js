import PropTypes from 'prop-types'



const CoffeeButton = ({color, text, coffeeImgPath}) => {

  function saveData(name) {
    // save data to user session
    let obj = {'coffee_type': name, 'date': new Date().toLocaleString() + ''};
    localStorage.setItem('CoffeeData', JSON.stringify(obj));
    // console.log("Saved: " + JSON.stringify(obj))
  }

  return (
    <div>
    <input type="checkbox" id="btnControl"/>  
    <button onClick={() => saveData(text)} 
    style={{backgroundColor:color, backgroundImage: `url(${coffeeImgPath})`}}
    variant="outline-dark"
    className="rbtn"
    for="btnControl"
    >
    {text}
    </button>
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