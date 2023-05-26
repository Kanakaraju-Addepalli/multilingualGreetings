import './index.css'

const ButtonItem = props => {
  const {isActive, onClickChangeLanguage, ButtonItemDetails} = props
  const {buttonText, id} = ButtonItemDetails

  const onClickButton = () => {
    onClickChangeLanguage(id)
  }
  const activeTabBtnClassName = isActive ? 'highlighted' : 'not-highlighted'

  return (
    <li className="button-container">
      <button
        type="button"
        className={`buttons ${activeTabBtnClassName}`}
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonItem
