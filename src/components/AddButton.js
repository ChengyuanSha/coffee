import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const AddButton = ({text}) => {

  const setData = async () => {
    let coffeeType = localStorage.getItem('CoffeeData')
    let temp = localStorage.getItem('Temperature')
    let data = Object.assign({}, JSON.parse(coffeeType),  JSON.parse(temp));
    data['id'] = new Date().valueOf() // set an unqiue ID 
    data['date'] = new Date().toLocaleString() + '' // record current Date

    await fetch(`http://localhost:4000/coffeeInfo/`,
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})

  }

  return (
    <div>
      <Button onClick={setData} 
      size="lg"
      >
      {text}
      </Button>
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





