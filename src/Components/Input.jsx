import { useState } from "react"




function Input({type, name, placeholder, required}) {

const [valid, setValid] = useState("")
const [error, setError] = useState("")


/*


badInput
customError
patternMismatch
rangeOverflow
rangeUnderflow
stepMismatch
tooLong
tooShort
typeMismatch
valid
valueMissing

*/
const handleValidation = (e) => {
    console.log(e)
    if(!e.target.validity.valid ){
        setValid("invalid")
        setError("Whoops, can't be empty...")
    }
    else if(e.target.value.length <= 3){
        setValid("invalid")
        setError("Whoops, Instance too short...")
    }
    else{
        setValid("valid")
        setError("")
    }
}

    return (
    <label htmlFor={name}>
        <input type={type}
        className={valid} 
        name={name} 
        id={name} 
        placeholder={placeholder}
        required={required}
        onChange={handleValidation}
    />
    <span className="error">{error}</span>
    </label>
  )
}

export default Input