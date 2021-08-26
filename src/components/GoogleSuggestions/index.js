// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {search: ''}

  pushSuggestion = suggestion => {
    this.setState({search: suggestion})
  }

  onChangeSearchInput = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {search} = this.state
    const {suggestionsList} = this.props

    const searchSuggestion = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="bg-con">
        <div className="holding-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />

          <div className="search-bar">
            <div className="search-input-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-logo"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Search Google"
                value={search}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="suggestion">
              {searchSuggestion.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  item={eachItem}
                  pushSuggestion={this.pushSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
