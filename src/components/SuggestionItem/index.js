// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, pushSuggestion} = props
  const {suggestion} = item

  const ClickToPush = () => {
    pushSuggestion(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={ClickToPush}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
