import CustomButton from './CustomButton'
import coffee1 from '../assets/coffee1.jpg'
import coffee2 from '../assets/coffee2.jpg'
import coffee3 from '../assets/coffee3.jpg'
import coffee4 from '../assets/coffee4.jpg'
import coffee5 from '../assets/coffee5.jpg'
import coffee6 from '../assets/coffee6.jpg'
import coffee7 from '../assets/coffee7.jpg'
import SaveButton from './SaveButton'

const Body = () => {

  var config = require('../config.json'); // import config file
  var imgList = [coffee1, coffee2,coffee3, coffee4, coffee5, coffee6, coffee7]
  // dynamic render the page with config file
  var storageNames = []
  var rows = [];
  for (var key in config) {
    var eachRow = config[key]
    storageNames.push(eachRow['button_type'])
    var buttonGroup = []
    for (var i = 0; i < eachRow['buttons'].length; i++) {
      buttonGroup.push(<CustomButton text={eachRow['buttons'][i]} imgPath={imgList[eachRow['images'][i]]} 
                        storageName={eachRow['button_type']} sessionStorageName = {eachRow['button_type']} 
                        />)
    }
    rows.push(<h3 className='bodyTxt'>{eachRow["instruction"]}</h3>,
              <div className="body">
              {buttonGroup} 
              </div>
              ); 
  }


  return (

    <div>
      <header className='header'>
      <h2>{"Coffee Logger"}</h2>
      <SaveButton text='Save Log' storageNames={storageNames}/>
      </header>
      {rows}
    </div>
  )
}

export default Body