import { useEffect, useState } from "react"
import ImageContainer from "./ImageContainer"



function Darkmode() {
  
  // Trigger the darkmode if the colorMode is true
  const [colorMode, setColorMode] = useState(false)

  // Setup the range intial value and change it on range change
  const [rangeValue, setRangeValue] = useState("0")



  useEffect(() => {
    if(colorMode){
      localStorage.setItem("dark-mode", true)
      document.body.classList.add("dark-mode")
      setRangeValue("1")
    }else{
      localStorage.removeItem("dark-mode")
      document.body.classList.remove("dark-mode")
      setRangeValue(0)
    }
  }, [colorMode])

  return (
    <form className="darkmode-container">
        <label htmlFor="darkmmode">
            <input type="range" 
            name="darkmode" 
            id="darkmmode" 
            min="0" 
            max="1"
            value={rangeValue}
            className={`${colorMode ? "darkmode":""}`}
            onChange={() => {
              setColorMode(!colorMode)
            }}
            />
            <ImageContainer>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
            </ImageContainer>
        </label>
    </form>
  )



}

export default Darkmode