import { useEffect, useState } from "react"

function SelectCustom() {

    const [value, setValue] = useState(localStorage.getItem("fontStyle") || 'Sans-serif')
    // const [dataValue, setDataValue] = useState(localStorage.getItem("fontStyle"))
    const [isOpen, setIsOpen] = useState("")


    useEffect(() => {
        document.body.setAttribute("data-font", value);
        localStorage.setItem("fontStyle", value);
      }, [value]);

    

  return (
    <div className="custom-dropdown">
        <button className="dropdown-toggle" 
        onClick={() => {setIsOpen(prev => !prev)}}
        // dataValue={dataValue}
        >
            <span className="text">{value}</span>
            <span className="icon"><img src="./images/icon-arrow-down.svg" alt="Arrow Down Icon" /></span>
        </button>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <div className="dropdown-item" 
            onClick={() => {
                setValue("sans-serif")
                // setDataValue(0)
                localStorage.setItem("fontStyle", 0)
                setIsOpen(prev => !prev)

            }}>Sans-Serif</div>
            <div className="dropdown-item" datavalue={1} onClick={() => {
                setValue("serif")
                // setDataValue(1)
                localStorage.setItem("fontStyle", 1)
                setIsOpen(prev => !prev)
            }}>Serfi</div>
            <div className="dropdown-item" datavalue={2}
            onClick={() => {
                setValue("mono")
                // setDataValue(2)
                localStorage.setItem("fontStyle", 2)
                setIsOpen(prev => !prev)
            }}
            >Mono</div>
        </div>
    </div>
  )
}

export default SelectCustom