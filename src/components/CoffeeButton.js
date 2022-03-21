import PropTypes from 'prop-types'



const CoffeeButton = ({color, text, coffeeImgPath}) => {

  function saveData(name) {
    // save data to user session
    let obj = {'coffee_type': name, 'date': new Date().toLocaleString() + ''};
    localStorage.setItem('CoffeeData', JSON.stringify(obj));
    console.log("Coffee Type Saved: " + JSON.stringify(obj))
    // console.log(document.getElementById("rbtn").style)
    // document.getElementsByClassName("rbtn").style["boxShadow"] = "245, 29, 22, 0.959";
  }

  return (
    <div>
    <button onClick={() => saveData(text)} 
    style={{backgroundColor:color, backgroundImage: `url(${coffeeImgPath})`}}
    variant="outline-dark"
    className="rbtn"
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