//Components
import Header from './Components/Header'
import Fonts from './Components/Fonts'
import Button from './Components/Button'
import ImageContainer from './Components/ImageContainer'
import Darkmode from './Components/Darkmode'
import "./App.css"

function App() {

 
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
              <form id="search-form">
                <label htmlFor="search-input">
                <input type="text" name="search-input" id="search-input" placeholder='Keyboard'/>
                <Button btnType="submit">
                  <ImageContainer classname="icon-container">
                    <img src="/images/icon-search.svg" alt="Search Icon" />
                  </ImageContainer>
                </Button>
                </label>
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
                          <span className="phonetic">/ˈkiːbɔːd/</span>                          
                        </h2>
                        <Button btnType="submit">
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
                            <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                            <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                            <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
                          </ul>
                        </div>
                        <div className="synonym-container">
                          <h4>Synonyms</h4>
                          <ul>
                            <li>
                              <button>
                                electronic keyboard
                              </button>
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
                            <li>To type on a computer keyboard.</li>
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
}

export default App
