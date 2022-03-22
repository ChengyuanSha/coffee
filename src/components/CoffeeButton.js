import PropTypes from 'prop-types'



const CoffeeButton = ({color, text, ImgPath}) => {

  function saveData(name) {
    let obj = {'CoffeeButton': name};
    localStorage.setItem('CoffeeButtonData', JSON.stringify(obj));
    console.log("Saved: " + JSON.stringify(obj))
  }

  return (
    <div>
    <button onClick={() => saveData(text)} 
    style={{backgroundColor:color, backgroundImage: `url(${ImgPath})`}}
    variant="outline-dark"
    className="button0_btn"
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