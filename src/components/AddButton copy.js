import PropTypes from 'prop-types'
import { useState, useRef, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { CSVLink } from "react-csv";

const AddButton = ({color, text}) => {
  const [csvdata, setCsvdata] = useState([])
  const csvLink = useRef() 

  useEffect(() => {
    // console.log(csvdata.length)
    if (csvdata.length !== 0)
      csvLink.current.link.click();
  }, [csvdata]);

  const getData = () => {
    let coffee = localStorage.getItem('CoffeeData')
    let temp = localStorage.getItem('Temperature')
    let merge_data = Object.assign({}, JSON.parse(coffee),  JSON.parse(temp));
    let data = [merge_data]
    setCsvdata(data)
    // console.log("coffee csv data", csvdata);
    // console.log("current csv data", [data]);
    // csvLink.current.link.click();
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





