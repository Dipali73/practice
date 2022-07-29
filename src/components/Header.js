import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd , showAdd }) => {
    
  return (
   <header className='header'>
   
    <h1>{title}</h1>

    <Button  color={showAdd ? 'skyblue' : 'green'} 
    text={showAdd ? 'close' : 'Add'}  onClick={onAdd}/>

    {/* Add different buttons using props not need to rewrite the code */}
    {/* <Button  color='purple' text='mono' />
    <Button  color='pink' text='jin' /> */}
   
   </header>
  )
}
Header.defaultProps ={
    title:'Task Tracker',

}

Header.propTypes={
    title:PropTypes.string.isRequired
}
//css in js
// const headingStyle ={
//     color:'red',
//     backgroundColor:'purple'

// }

export default Header