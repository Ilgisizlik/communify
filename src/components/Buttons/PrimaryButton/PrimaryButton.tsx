import React from 'react'
//type
import { ButtonType } from '../ButtonType'
//css
import './PrimaryButton.css'

const PrimaryButton = (props: ButtonType) => {
  return (
    <button className="primary-button" role="button" style={{width:props.width, height:props.height}}>
        {props.value}
    </button>
  )
}

export default PrimaryButton