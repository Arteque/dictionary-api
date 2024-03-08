import { useState } from "react"
import Header from "./Header"
import Button from "./Button"
function Defintion({items}) {

const [wordName, setWordName] = useState("")
const [wordPhonetic, setWordPhonetic] = useState("")

if(items.length >= 1){
    
    //Name
    setWordName(items[0].word)
    console.log(wordName)

    return (
        <>
            <main>
            <section>
                <div className="wrapper">	
                  <Header headerName="section-header">
                      <div className="top-header">
                          <h2>
                                <span className='headline'>{wordName}</span>
                            <span className="phonetic"></span>                          
                          </h2>
                          <Button btnType="submit" className="hide-it">
                            <img src="/images/icon-play.svg" alt="Play Icon" />
                          </Button>
                      </div>
                      <div className="bottom-header">
                        
                      </div>
                  </Header>
                  <div className="content">
                    {/* Noun */}
                    <div className="details">
                          <h3 className="italic">noun</h3>
                          <div className="definition">
                              <div className="meaning-container">
                                <h4>Meaning</h4>
                                <ul>
                                  <li></li>
                                </ul>
                              </div>
                              <div className="synonym-container">
                                <h4>Synonyms</h4>
                                <ul>
                                  <li>
                                    
                                  </li>
                                </ul>
                              </div>
                          </div>
                        </div>
      
                        {/* Verb */}
                        <div className="details">
                          <h3 className="italic">Verb</h3>
                          <div className="definition">
                              <div className="meaning-container">
                                <h4>Meaning</h4>
                                <ul>
                                  <li></li>
                                </ul>
                                <p className="citation">
                                  “Keyboarding is the part of this job I hate the most.”
                                </p>
                              </div>
                          </div>
                        </div>
      
                        {/* Source */}
                        <div className="source-container">
                            
                            <a href="https://en.wiktionary.org/wiki/keyboard" target='_bank'>
                              <span className="title">Source</span>
                              <span>https://en.wiktionary.org/wiki/keyboard</span>
                              <img src="/images/icon-new-window.svg" alt="Open in new Tab" />
                            </a>
                            
                        </div>
                  </div>
                </div>
            </section>
          </main>          
        </>

    )
}else{
    return <>
      <main>
        <div className="wrapper">
          <div className="details">
              <h3 className="italic">About</h3>
              <p>
                  this project was made with love, using:
              </p>
              <ul>
                  <li>Reactjs</li>
              </ul>
              <p>
                  <small>
                      <samp>
                      the project is hostet under MIT Licence. So feel free to use change or comment my work.
                      </samp>
                  </small>
              </p>
              <br />
              <p>
                  The challenge is from <i>FRONTEND MENTOR</i> <a href="https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL" target="_blank" title="Frontend Mentor website">here</a>

              </p>
          </div>
        </div>
      </main>
    </>
}     

  
}

export default Defintion