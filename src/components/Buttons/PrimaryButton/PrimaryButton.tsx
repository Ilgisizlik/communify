import React from 'react'
//type
import { ButtonType } from '../ButtonType'
//css
import './PrimaryButton.css'

const PrimaryButton = (props: ButtonType) => {
  return (
    <button className="primary-button" role="button">{props.value}</button>
  )
}

export default PrimaryButton