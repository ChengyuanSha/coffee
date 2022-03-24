import PropTypes from 'prop-types'
import AddButton from './AddButton'



const Header = ({ title }) => {
  return (
    <header className='header'>
        <h2>{title}</h2>
        <AddButton text='Save Log'/>
    </header>

  )
}



Header.defaultProps = {
    title: 'Choose a Coffee',
}
  

Header.protoTypes = {
    title: PropTypes.string.isRequried,
}
  


export default Header
