function Button({btnType, children, handleClick}) {

  

  return (
    <button type={btnType} onClick={handleClick}>{children}</button>
  )
}

export default Button