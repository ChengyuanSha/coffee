import PropTypes from 'prop-types'
import { useState, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { CSVLink } from "react-csv";

const AddButton = ({color, text}) => {
  const [coffeeCSVData, setcoffeeCSVData] = useState([])
  const csvLink = useRef() 

  const getData = () => {
    let data = localStorage.getItem('CoffeeData');
    data = JSON.parse(data);
    setcoffeeCSVData([data]);
    console.log(data);
    csvLink.current.link.click();
    // alert("Recorded");
  }

  return (
    <div>
      <Button onClick={() => getData()} 
      style={{backgroundColor:color}}
      >
      {text}
      </Button>
      <CSVLink
      data={coffeeCSVData}
      filename='coffeeCSVData.csv'
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





