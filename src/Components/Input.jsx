
function Input({type, name, placeholder, required, error}) {


    return (
    <label htmlFor={name}>
        <input type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder}
        required={required}
    />
    <span className="error">{error}</span>
    </label>
  )
}

export default Input