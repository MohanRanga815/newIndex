// Write your code here.
import './index.css'

const LOSE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickAgain, score} = props
  const imageUrl = isWon ? WON : LOSE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-label">{scoreLabel}</p>
        <p className="current-value">{score}/12</p>
        <button type="button" className="btn" onClick={onClickAgain}>
          Play Again
        </button>

        <div className="image-con">
          <img className="image-logo" src={imageUrl} alt="win or lose" />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
