function Defintion({items}) {

if(items.length >= 1){
    // console.log(items)
    items.map((data,i) => {
        const wordName = items[0].word
        const wordPhonetic = items[0].phonetics.filter(item => item.text && item.text !== "")
        const wordAudio = items[0].phonetics.filter(item => item.audio && item.audio !== "")
        const meanings = data.meanings
        const nouns = meanings.filter(item => item.partOfSpeech == "noun")
        const verbs = meanings.filter(item => item.partOfSpeech == "verb")
        const adverbs = meanings.filter(item => item.partOfSpeech == "adverb")
        const adjectifs = meanings.filter(item => item.partOfSpeech == "adjectifs")
        
    })
    return (
        <>
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
        </>

    )
}else{
    return <>
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
        
      
    </>
}     

  
}

export default Defintion