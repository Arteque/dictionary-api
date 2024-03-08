import SuggestionListItems from "./SuggestionListItems"
function Searchform({searchInput, submitInput,suggestionList, errorText, searchClickedItem,inputValue}) {




  return (
    <>
        <form id="search-form" onChange={searchInput} onSubmit={submitInput}>
            <div className="search-container">
                <label htmlFor="search-input">
                    <input 
                    type="text" 
                    required 
                    name="search-input" 
                    id="search-input"
                    autoComplete="off"
                    placeholder="Search for any word..."
                    value={inputValue}      
                    />
                </label>
                <button type="submit">
                    <img src="/images/icon-search.svg" alt="Search Icon" />
                </button>
            </div>
            <span className='error'>{errorText}</span>
            {/* Show Suggestions */}
            <div className="suggestionlist-container">
              <ul className="wordsuggestion-container" >         
                    {suggestionList.map((item,index) => {
                      return <SuggestionListItems 
                      key={`${item.word}-${index}`} 
                      suggestionWord={item.word}
                      dataValue={item.word}
                      onItemClick={searchClickedItem}
                      />
                    })}
              </ul>
            </div>
        </form> 
    </>
  )
}

export default Searchform                                                                                                                                                                                                                                                