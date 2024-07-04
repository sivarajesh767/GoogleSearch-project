// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchDetails, updateSearch} = props
  const {Suggestion} = searchDetails
  const onClickSuggestion=()=>{
    updateSearch(Suggestion)
  }
  return (
    <li>
    <p>{Suggestion}</p>
    <button type="button" onClick={onClickSuggestion}>
    </button>
    </li>
  )
}
export default SuggestionItem
