import {Link} from "react-router-dom"
import React from "react"

interface ButtonMailtoProps {
    mailto: string;
    label: React.ReactNode
}

const ButtonMailto: React.FC<ButtonMailtoProps> = ({mailto, label}) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto
        e.preventDefault()
      }}
    >
      {label}
    </Link>
  )
}

export default ButtonMailto
