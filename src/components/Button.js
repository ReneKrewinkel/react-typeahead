import { useState, useEffect, useContext } from 'react'

const Button = ({ action }) => {

  const handler = () => {
    action()
  }

  return(
    <div>
      <button onClick={ () => handler() }>Clear</button>
    </div>
  )

}

export default Button