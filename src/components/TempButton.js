


const TempButton = ({color, text, coffeeImgPath}) => {

  function saveData(name) {
    // save data to user session
    let obj = {'temperature': name};
    localStorage.setItem('Temperature', JSON.stringify(obj));
    console.log("Temperature Saved: " + JSON.stringify(obj))
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


export default TempButton