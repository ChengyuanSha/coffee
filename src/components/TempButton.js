

const TempButton = ({color, text, coffeeImgPath}) => {

    function saveData(name) {
      // save data to user session
      let obj = {'temperature': name};
      localStorage.setItem('Temperature', JSON.stringify(obj));
      console.log("Temperature Saved: " + JSON.stringify(obj));
    }
  
    return (
      <div>
      <button onClick={() => saveData(text)} 
      style={{backgroundColor:color, backgroundImage: `url(${coffeeImgPath})`}}
      variant="outline-dark"
      className="rbtnTemp"
      >
      {text}
      </button>
      </div>
    )
  }
  
  
  export default TempButton