// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}
  onChangeSearchInput = value => {
    this.setState({searchInput: value})
  }
  updateSearch = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const {searchDetailsList} = this.props
    const resultSearch = searchDetailsList.filter(eachSearch =>
      eachSearch.Suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="background-con">
        <div className="google-logon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="googleLogo-img"
          />
        </div>
        <div className="con2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="searchIcon"
          />
          <input
            type="search"
            className="searchBar"
            onChange={this.onChangeSearchInput}
            placeholder="Search Google"
          />
        </div>
        <ul>
          {resultSearch.map(eachSearch => (
            <SuggestionItem
              key={eachSearch.id}
              searchDetails={eachSearch}
              updateSearch={this.updateSearch}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
