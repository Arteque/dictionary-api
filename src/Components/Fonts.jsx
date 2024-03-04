import {useEffect, useState} from 'react'

function Fonts() {


  const [font, setFont] = useState(0)
  const fontsArr = ["sans-serif","serif","mono"]
  useEffect(() => {
    document.body.dataset.font = fontsArr[Number(font)]
  }, [font])


  return (
    <div className="fonts-setup-container">
        <select className="txt-body-s" onChange={(e) => {setFont(e.target.selectedIndex)}}>
            <option value="sans">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="mono">Mono</option>
        </select>
        <div className="arrowdown">
          <img src="/images/icon-arrow-down.svg" alt="Arrowdown" />
        </div>
    </div>
  )
}

export default Fonts