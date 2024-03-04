//Context
import { useGlobalData } from './Context/Search'
//Components
import Header from './Components/Header'
import Fonts from './Components/Fonts'
import Button from './Components/Button'
import ImageContainer from './Components/ImageContainer'
import Darkmode from './Components/Darkmode'
import Input from './Components/Input'
import Noun from './Components/Noun'
import "./App.css"

function App() {

 
const {globalData, setGlobalData} = useGlobalData()

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
                <Input type="text" required="required"  name="search-input" />
                <Button>
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
                          <span className='headline'>{globalData.word}</span>
                          <span className="phonetic">{globalData.phonetic}</span>                          
                        </h2>
                        <Button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
                          <video>
                               <source src={globalData.phonetics[0].audio} type="audio/mpeg" />
                          </video>
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
                            <Noun items={globalData.meanings} term="noun"/>
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
                            <Noun items={globalData.meanings} term="verb"/>
                          </ul>
                        </div>
                    </div>
                  </div>

                  {/* Source */}
                  <div className="source-container">
                     
                      <a href={globalData.sourceUrls} target='_bank'>
                        <span className="title">Source</span>
                        <span> {globalData.sourceUrls}</span>
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
