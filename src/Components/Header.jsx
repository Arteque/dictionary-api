function Header({headerName, children}) {
  return (
    <header className={headerName}>
        {children}
    </header>
  )
}


export default Header