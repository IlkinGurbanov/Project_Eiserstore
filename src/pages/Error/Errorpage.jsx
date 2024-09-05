import React from 'react'
import './Error.css'

function Errorpage() {
  return (
    <div className="Error">
        <div className="error">
            <p className="errorhead">404</p>
            <p className="errortextfirst">error</p>
            <p className="errortext">This page don't exist</p>
        </div>
    </div>
  )
}

export default Errorpage