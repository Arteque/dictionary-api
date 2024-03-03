import { useEffect, useState } from "react"
import ImageContainer from "./ImageContainer"



function Darkmode() {
  
  const [colorMode, setColorMode] = useState(false)
  let mode

  useEffect(() => {
    if(colorMode){
      localStorage.removeItem("dark-mode")
      document.body.classList.remove("dark-mode")
    }else{
      localStorage.setItem("dark-mode", true)
      document.body.classList.add("dark-mode")
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
            onChange={() => {setColorMode(!colorMode)}}
            />
            <ImageContainer>
                <img src="/images/icon-moon.svg" alt="Dark mode icon" />
            </ImageContainer>
        </label>
    </form>
  )



}

export default Darkmode