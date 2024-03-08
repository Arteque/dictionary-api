import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
//Components
import Header from './Components/Header'
import Fonts from './Components/Fonts'
import ImageContainer from './Components/ImageContainer'
import Darkmode from './Components/Darkmode'
import Searchform from './Components/Searchform'

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


  //audio Playing
  const [audioPlaying, setAudioPlaying] = useState(false)



 const playAudio = () => {
  const audioItem = document.querySelector("#audioElement")
  audioItem.play()
  setAudioPlaying(true)
 } 
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
        {
          (finalWord.length > 0) 
          ?(
            <main>
            <section>
                <div className="wrapper">	
                  <Header headerName="section-header">
                      <div className="top-header">
                          <h2>
                                <span className='headline'>
                                  {
                                    finalWord[0].word
                                  }
                                </span>
                            <span className="phonetic">
                                  {
                                    finalWord[0].phonetic 
                                    ? finalWord[0].phonetic
                                    : (
                                      finalWord[0].phonetics[0].text
                                    )
                                  }
                            </span>                          
                          </h2>
                          
                          {
                            (finalWord[0].phonetics[0].audio !== "") 
                            && (
                              <>
                                <button className="hide-it" onClick={playAudio}>
                                  <img src="/images/icon-play.svg" alt="Play Icon" />
                                </button>
                                 <audio id="audioElement" src={finalWord[0].phonetics[0].audio}></audio>
                              </>
                            )
                            
                          }
                      </div>
                      <div className="bottom-header">
                        
                      </div>
                     
                  </Header>
                  {
                    
                    finalWord.map((words, index) => {
                     return <Fragment key={index}>
                        {
                          words.meanings.map((element, e) => {
                      return  <Fragment key={`${element}-${e}`}>
                              <div className="content" >
                                <div className="details">
                                  <h3 className="italic">
                                      {element.partOfSpeech}
                                  </h3>
                                  <div className="definition">
                                      <h4>Meaning</h4>
                                      <ul>
                                        {
                                          element.definitions.map((def,d) => {
                                            return <li key={`${def}-${d}`}>{def.definition}</li>
                                          })
                                        }
                                      </ul>
                                     
                                      {
                                        (element.synonyms.length > 0) && (
                                          <div className="synonym-container">
                                            <h4>Synonyms</h4>
                                            <ul>
                                              {element.synonyms.map((syn,s) => {
                                                return (<Fragment key={syn}><li><button>{syn}</button></li></Fragment>)
                                              })}
                                            </ul>
                                          </div>
                                        )
                                      }

{
                                        element.definitions.map((example, e)=>{
                                          return (example.example && example.example !== "") && (
                                            <p className="citation" key={`${example.example}-${e}`}>
                                              <small>
                                              " {example.example} "
                                              </small>
                                              </p> 
                                          )
                                        })
                                      }
                                      
                                  </div>
                                </div>
                              </div>
                              
                            </Fragment>
                          })
                        
                        }
                        {/* Source */}
                        {console.log(words)}
                                  
                            {words.sourceUrls.map((url,index)=>{
                              return (
                              <Fragment key={`${url}-${index}`}>
                                      <div className="source-container">
                                            <a href={url} target='_bank' title={url}>
                                              <span className="title">Source</span>
                                              <span>{url}</span>
                                              <img src="/images/icon-new-window.svg" alt="Open in new Tab" />
                                            </a>
                                      </div>
                                </Fragment>
                                )
                            })}
                            
                      </Fragment>
                    })
                  }
                </div>
            </section>
          </main>  
          )
          :(
            <>
              <main>
                <div className="wrapper">
                  <p>no Data</p>
                </div>
              </main>
            </>
          )
        }  
      </>
      
    
  ) 
}

export default App
