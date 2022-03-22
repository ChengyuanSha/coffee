import PropTypes from 'prop-types'
import { useState, useRef, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { CSVLink } from "react-csv";

const AddButton = ({color, text}) => {
  const [csvdata, setCsvdata] = useState([])
  const csvLink = useRef() 

  useEffect(() => {
    if (csvdata.length !== 0)
      csvLink.current.link.click();
  }, [csvdata]);

  const getData = () => {
    let CoffeeButton = localStorage.getItem('CoffeeButtonData')
let TempButton = localStorage.getItem('TempButtonData')
let TempButton2 = localStorage.getItem('TempButton2Data')
let merge_data = Object.assign({},JSON.parse(CoffeeButton), JSON.parse(TempButton), JSON.parse(TempButton2),{'date': new Date().toLocaleString() + ''});
    let data = [merge_data]
    setCsvdata(data)
  }

  return (
    <div>
      <Button onClick={getData} 
      size="lg"
      >
      {text}
      </Button>
      <CSVLink
      data={csvdata}
      filename='csvdata.csv'
      className='hidden'
      ref={csvLink}
      target='_blank'
      />
    </div>
  )
}


AddButton.defaultProps = {
    color: 'steelblue'
}

AddButton.propType = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default AddButton





