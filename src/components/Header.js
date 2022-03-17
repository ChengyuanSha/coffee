import PropTypes from 'prop-types'
import AddButton from './AddButton'



const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <AddButton color='green' text='Add'/>
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
