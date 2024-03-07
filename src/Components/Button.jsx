function Button({btnType, children}) {

  const handleClick = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <button type={btnType} onClick={handleClick}>{children}</button>
  )
}

export default Button