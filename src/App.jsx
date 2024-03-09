import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
//Components
import Header from './Components/Header'
import Fonts from './Components/Fonts'
import ImageContainer from './Components/ImageContainer'
import Darkmode from './Components/Darkmode'
import Searchform from './Components/Searchform'

import "./App.css"
import Loader from './Components/Loader'
import NewWindowIcon from './Components/NewWindowIcon'

function App() {

 

  // Seachform text input
  const [input, setInput] = useState("")

  //Suggestions
  const [suggestions, setSuggestions] = useState([])


  //Final Searched Word Definitions
  const [finalWord, setFinalWord] = useState([])

  // Error Text
  const [errorText, setErrorText] = useState("")


  //Error Title
  const [notFoundTitle, setNotFoundTitle] = useState("")
  const [notFoundText, setNotFoundText] = useState("")

  //audio Playing
  const [audioPlaying, setAudioPlaying] = useState(false)

  //Loading
  const [loading, setLoading] = useState(false);


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
  console.log(clickedWord)
  setInput(clickedWord)
  searchFinalWord(input)
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
    .catch(error => console.log(error))
}


//Search the final word
const searchFinalWord = (word) => {
  setLoading(true)
  axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then(response => {
    setFinalWord(response.data)
    setSuggestions([])
    setInput("")
    setErrorText("")
  })
  .catch(error => {
    const title = `${error.response.data.title}`
    const txt = `${error.response.data.message} ${error.response.data.resolution}`
    setSuggestions([])

    setNotFoundTitle(title)
    setNotFoundText(txt)

  })
  .finally(() => {
    setLoading(false)
    setSuggestions([])
  })
}



 //ColorMode
 const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")));
 

//  change the body classname if the value of the darkmode const has changed
 useEffect(() => {
  if (darkMode) {
    document.body.classList.add('dark-mode');
    localStorage.setItem("darkMode", true)
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem("darkMode", false)
  } 
 }, [darkMode])

 const toggleDarkMode = () => {
  setDarkMode(prev => !prev)
 }


 useEffect(() => {
  document.onreadystatechange = () => {
    console.log(document.readyState)
      if(document.readyState !== "complete"){
        setLoading(true)
      }else{
        setLoading(false)
      }
  }
},[])




  return (
      <>
      <Loader addClass={loading ? 'loader show-loader' : 'loader hide-loader'} />
        {/*Main Header*/}
        <Header headerName="main-header">
          <div className="wrapper">
              {/* Top Header */}
            <div className="top-header">
              <ImageContainer classname="logo-container">
                <img src="./images/logo.svg" alt="logo-container" />
              </ImageContainer>
              <Fonts />
              <Darkmode 
              Value={darkMode ? '1' : '0'}
              colorMode={darkMode ? 'dark-mode' : ''}
              changeMode={toggleDarkMode}
              />
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
                
                searchClickedItem={searchFinalWord}
                
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
                                  <button className="playaudio-btn" onClick={playAudio}>
                                    <img src="./images/icon-play.svg" alt="Play Icon" />
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
                                                  return (<Fragment key={syn}><li><button onClick={() => {
                                                    searchFinalWord(syn)
                                                  }}>{syn}</button></li></Fragment>)
                                                })}
                                              </ul>
                                            </div>
                                          )
                                        }

  {
                                          element.definitions.map((example, e)=>{
                                            return (example.example && example.example !== "") && (
                                              <p className="citation" key={`${example.example}-${e}`}>
                                                &ldquo; - {example.example} &rdquo; 
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
                        </Fragment>
                      })
                    }
                    {/* Source */}
                      <div className="source-container">
                            <a href={finalWord[0].sourceUrls[0]} target='_bank' title={finalWord[0].sourceUrls[0]}>
                              <span className="title">Source</span>
                              <span>{finalWord[0].sourceUrls[0]}</span>
                              <img src="./images/icon-new-window.svg" alt="Open in new Tab" />
                            </a>
                      </div>
                  </div>
              </section>
          </main>  
          )

          : (notFoundTitle) ? (
            <>
              <main>
                <div className="wrapper">
                  {notFoundTitle && (
                    <section className="not-found-section">
                      <div className="emoji">
                        &#128533;
                      </div>
                      <h3>{notFoundTitle}</h3>
                      <p>{notFoundText}</p>
                    </section>
                  )}
                  
                </div>
              </main>
            </>
          )
          :(
            <>
              <main className="default-text-start">
                <div className="wrapper">
                  
                  <h2>Dictionary</h2>
                  <p>
                    project challenge propsed by
                    <a href="https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL" 
                    target='_blanc'
                    title="Frontend Mentor"  
                    >
                    Frontend Mentor <NewWindowIcon />
                    </a>
                  </p>
                    <div className="card">
                      <div className="card-image">
                        <img src="https://avatars.githubusercontent.com/u/42782650?s=400&u=74543fc05fbe11646044aad20c042465461e8b94&v=4" alt="Ahmed lemssiah" />
                      </div>
                      <div className="card-body">
                        <p>
                            Challenge Coded by <a href="https://artecke.de" 
                            target='_blanc'
                            title="Ahmed Lemssiah Portfolio"  
                            >
                              Ahmed Lemssiah <NewWindowIcon />
                            </a> &#129398;  
                            <br />
                            Using # React + Vite

                        </p>
                      </div>
                    </div> 
                    <ul>
                        <li>
                            <a href="https://github.com/Arteque/" target="_blank" title="Some of my projects on Github">
                                <i class="fab fa-github"></i> 
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ArteckeDesign" target="_blank" title="some of my thoughts on X/Twitter">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCjzbCFOWdsdV6gxa5ho7EtQ" target="_blank" title="Some of my videos on Youtube">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/artt3k/" target="_blank" title="Some of my drawings on instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>          
                        <li>
                            <a href="https://www.facebook.com/DieArtEcke" target="_blank" title="My sharings on Facebook">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                  
                </div>
              </main>
            </>
          )
        }  
      </>
      
    
  ) 
}

export default App
