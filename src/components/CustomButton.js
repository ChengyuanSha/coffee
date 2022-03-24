import PropTypes from 'prop-types'
import { useState } from 'react';

// storageName: key stored in database 
// sessionStorageName: key used in session to retrieve data, not stored in database
const CustomButton = ({text, imgPath, storageName, sessionStorageName}) => {
  const [selectedButton, setSelectedButton] = useState(false);

  function saveData(name) {
    // save data to user session
    let obj = {};
    obj[storageName] = name;
    localStorage.setItem(sessionStorageName, JSON.stringify(obj));
    // console.log("storageName saved:", JSON.stringify(obj));

    setSelectedButton(!selectedButton); // change style when clicked
  }

  return (
    <div>
    <button onClick={() => saveData(text)} 
    style={{backgroundImage: `url(${imgPath})`}}
    variant="outline-dark"
    className={selectedButton === true ? "rbtnSelected" : "rbtn"}
    >
    {text}
    </button>
    </div>
  )
}


CustomButton.propType = {
    text: PropTypes.string,
    imgPath: PropTypes.string,
    storageName: PropTypes.string,
    sessionStorageName:  PropTypes.string
}

export default CustomButton