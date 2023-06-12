// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameProgress, highScore} = props

  return (
    <nav className="navbar-con">
      <div className="title-container">
        <div className="logo-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="emoji-logo"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>

        {isGameProgress && (
          <div className="score-con">
            <p className="score">Score : {currentScore}</p>
            <p className="score">Top Score : {highScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
