import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'

const Button = ({color, text}) => {
	const onClick = (e) => {
		console.log(e)
	}

  return (
    <button onClick={onClick} 
    style={{backgroundColor:color}}
    >
        {text}
    </button>
  )
}


Button.defaultProps = {
    color: 'steelblue'
}

Button.propType = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button





