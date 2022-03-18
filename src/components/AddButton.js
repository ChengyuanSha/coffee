import PropTypes from 'prop-types'
import { useState, useRef, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { CSVLink } from "react-csv";

const AddButton = ({color, text}) => {
  const [csvdata, setCsvdata] = useState([])
  const csvLink = useRef() 

  useEffect(() => {
    console.log(csvdata.length)
    if (csvdata.length !== 0)
      csvLink.current.link.click();
  }, [csvdata]);

  const getData = () => {
    var data = localStorage.getItem('CoffeeData');
    data = JSON.parse(data);
    data = [data]
    setCsvdata(data)
    // console.log("coffee csv data", csvdata);
    // console.log("current csv data", [data]);
    // csvLink.current.link.click();
    // alert("Recorded");
  }

  return (
    <div>
      <Button onClick={getData} 
      style={{backgroundColor:color}}
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





