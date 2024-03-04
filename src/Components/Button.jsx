import { useState } from "react"

function Button({btnType, children}) {

const [valid, setValid] = useState("invalid")


const handleSubmit = (e) => {
  console.log(e)
  e.preventDefault()
}

  return (
    <button type={btnType} onSubmit={handleSubmit} className={valid}>{children}</button>
  )
}

export default Button