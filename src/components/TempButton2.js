import PropTypes from 'prop-types'



const TempButton2 = ({color, text, ImgPath}) => {

  function saveData(name) {
    let obj = {'TempButton2': name};
    localStorage.setItem('TempButton2Data', JSON.stringify(obj));
    console.log("Saved: " + JSON.stringify(obj))
  }

  return (
    <div>
    <button onClick={() => saveData(text)} 
    style={{backgroundColor:color, backgroundImage: `url(${ImgPath})`}}
    variant="outline-dark"
    className="button2_btn"
    >
    {text}
    </button>
    </div>
  )
}


TempButton2.defaultProps = {
    color: 'steelblue'
}

TempButton2.propType = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default TempButton2