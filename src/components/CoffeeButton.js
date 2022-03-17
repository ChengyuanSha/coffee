import PropTypes from 'prop-types'
import coffee1 from '../assets/coffee1.jpg'

const Button = ({color, text}) => {
	const onClick = (e) => {
		console.log(e)
	}

  return (
    <button onClick={onClick} 
    style={{backgroundColor:color, backgroundImage: `url(${coffee1})`}}
    className="rbtn"
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