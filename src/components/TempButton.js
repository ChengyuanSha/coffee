import PropTypes from 'prop-types'



const TempButton = ({color, text, ImgPath}) => {

  function saveData(name) {
    let obj = {'TempButton': name};
    localStorage.setItem('TempButtonData', JSON.stringify(obj));
    console.log("Saved: " + JSON.stringify(obj))
  }

  return (
    <div>
    <button onClick={() => saveData(text)} 
    style={{backgroundColor:color, backgroundImage: `url(${ImgPath})`}}
    variant="outline-dark"
    className="button1_btn"
    >
    {text}
    </button>
    </div>
  )
}


TempButton.defaultProps = {
    color: 'steelblue'
}

TempButton.propType = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default TempButton