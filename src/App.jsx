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
          {/* Top Header */}
          <div className="top-header">
            <ImageContainer classname="logo-container">
              <img src="/images/logo.svg" alt="logo-container" />
            </ImageContainer>
            <Fonts />
            <Darkmode />
          </div>

          {/* Buttom Header Seach container */}
          <div className="buttom-header">
            <form id="search-form">
              <label htmlFor="search-input">
              <input type="text" name="search-input" id="search-input" />
              <Button btnType="submit">
                <ImageContainer classname="icon-container">
                  <img src="/images/icon-search.svg" alt="Search Icon" />
                </ImageContainer>
              </Button>
              </label>
            </form>
          </div>
        </Header>
        <main>
          <h2 className="txt-headline-l">Keyboard</h2>
          <Button btnType="submit">
            <img src="/images/icon-play.svg" alt="Play Icon" />
          </Button>
        </main>
      </>
      
    
  ) 
}

export default App
