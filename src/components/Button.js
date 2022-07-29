import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
    
  return (
    <button onClick={onClick} 
     className = 'btn'
     style={{backgroundColor:color}}>
        {text}
        </button>
  )
}
Button.defaultProps = {
    color : 'steelblue'
}
Button.proptype={
    text: PropTypes.string,
    color:PropTypes.string,
    color:PropTypes.func,
}

export default Button