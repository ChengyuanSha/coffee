import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const SaveButton = ({text, storageNames}) => {

  const saveData = async () => {
    // retrieve all data from session
    var data = {}
    for (var i = 0; i < storageNames.length; i++) {
        var storedData = localStorage.getItem(storageNames[i]);
        data = Object.assign({}, JSON.parse(storedData), data);
    }

    data['id'] = new Date().valueOf(); // set an unqiue ID 
    data['date'] = new Date().toLocaleString() + ''; // record current Date

    // send a post request to backend database 
    await fetch(`http://localhost:4000/coffeeInfo/`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {
        console.log("POST response:", response)
      })

    } 

  return (
    <div>
      <Button onClick={saveData} 
      size="lg"
      >
      {text}
      </Button>
    </div>
  )
}


export default SaveButton



