//Components
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Components/Header'
import Fonts from './Components/Fonts'
import Button from './Components/Button'
import ImageContainer from './Components/ImageContainer'
import Darkmode from './Components/Darkmode'
import Input from './Components/Input'
import Content from './Components/Content'
import "./App.css"

function App() {

const [searchText, setSearchText] = useState("")
const [errorText, setErrorText] = useState("")
const [data, setData] = useState("")

const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`


useEffect((e) => {
  searchText !== "" && (
    axios
    .get(baseUrl)
    .then((response) => {
        setData(response.data)
        console.log(data)
    })
    .catch((err) => {
        setErrorText("Oops: "+ err.response.data.title)
    })
  )
},[searchText])


const getSearchedText = (e) => {
  e.preventDefault()
  setSearchText(e.target.value)
}

  return (
      <>
        {/*Main Header*/}
        <Header headerName="main-header">
          <div className="wrapper">
              {/* Top Header */}
            <div className="top-header">
              <ImageContainer classname="logo-container">
                <img src="/images/logo.svg" alt="logo-container" />
              </ImageContainer>
              <Fonts />
              <Darkmode />
            </div>

            {/* Buttom Header Seach container */}
            <div className="bottom-header">
              <form id="search-form" >
                <Input 
                type="text" 
                required="required"  
                name="search-input" 
                error={errorText}
                />
                <Button btnType="submit">
                  <ImageContainer classname="icon-container">
                    <img src="/images/icon-search.svg" alt="Search Icon" />
                  </ImageContainer>
                </Button>
              </form>
            </div>
          </div>
        </Header>
        <main>
           <section>
              <div className="wrapper">	
                <Header headerName="section-header">
                    <div className="top-header">
                        <h2>
                          <span className='headline'>Keyboard</span>
                          <span className="phonetic"></span>                          
                        </h2>
                        <Button btnType="submit" handleClick={getSearchedText}>
                          <img src="/images/icon-play.svg" alt="Play Icon" />
                        </Button>
                    </div>
                    <div className="bottom-header">
                      
                    </div>
                </Header>
                <div className="content">
                    <Content />
                </div>
              </div>
           </section>
        </main>
      </>
      
    
  ) 
}

export default App
