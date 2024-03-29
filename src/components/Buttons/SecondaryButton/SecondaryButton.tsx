import React from 'react'
//type
import { ButtonType } from '../ButtonType'
//css
import './SecondaryButton.css'

const SecondaryButton = (props: ButtonType) => {
    return (
        <button className="secondary-button" role="button" style={{ width: props.width, height: props.height }}>
            {props.value}
        </button>
    )
}

export default SecondaryButton