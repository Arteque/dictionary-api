import { useEffect, useState } from 'react'
import axios from 'axios'
//Components
import Header from './Components/Header'
import Fonts from './Components/Fonts'
import ImageContainer from './Components/ImageContainer'
import Darkmode from './Components/Darkmode'
import Searchform from './Components/Searchform'
import Defintion from './Components/Defintion'
import "./App.css"

function App() {

// words suggestions url https://api.datamuse.com/sug?s=
// words Search https://api.dictionaryapi.dev/api/v2/entries/en/



  // Seachform text input
  const [input, setInput] = useState("")

  //Suggestions
  const [suggestions, setSuggestions] = useState([])


//Final Searched Word Definitions

  const [finalWord, setFinalWord] = useState([])

  // Error Text
  const [errorText, setErrorText] = useState("")



  // observe the input text
useEffect(() => {
  if(input.length >= 2 ){
    suggestWords(input)
  }else{
    setSuggestions([])
  }
}, [input])

//Add the suggestions Word to the search Input Value

const handleItemClick = (clickedWord) => {
  setInput(clickedWord)
  setSuggestions([])
}


//search Suggestions
const suggestWords = (text) => {
    axios.get(`https://api.datamuse.com/sug?s=${text}`)
    .then((response) => {
      const filterSuggestions = response.data.filter(
        (item, index) =>!item.word.includes(" ") && index < 7)      
        //change the suggestions
        setSuggestions(filterSuggestions)

    })
}


//Search the final word
const searchFinalWord = (word) => {
  axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then(response => {
    setFinalWord(response.data)
    setSuggestions([])
    setInput("")
    setErrorText("")
  })
  .catch(error => {
    const errorMessage = `${error.response.data.title} -- ${error.response.data.message}!`
    setErrorText(errorMessage)
  })
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
                <Searchform 

                searchInput={(e) => {
                  setInput(e.target.value)
                }}
                
                submitInput={(e) => {
                  e.preventDefault()
                  // setInput(e.target.value)
                  searchFinalWord(input)
                }}

                errorText={errorText}

                suggestionList={suggestions}

                inputValue={input}
                
                searchClickedItem={handleItemClick}

                />
            </div>
          </div>
        </Header>
        <Defintion items={finalWord}/>
      </>
      
    
  ) 
}

export default App
