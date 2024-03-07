
function SuggestionListItems({ suggestionWord, onItemClick, dataValue}) {
  return (
    <li dataword={dataValue} onClick={() => onItemClick(dataValue)}>
        <span title={suggestionWord} >{suggestionWord}</span>
    </li>
  )
}

export default SuggestionListItems