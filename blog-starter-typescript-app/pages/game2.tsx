import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'

let text = "Once upon a time, there was a world filled with splendor and beauty..."

function Game() {
    return (
	<body>
		<div id="imagebox">
		</div>
		<div id="textbox" className="centeredContainer">
			<span id="main-text" className="fade-in">
                {text}
            </span>
		</div>
	</body>)
}
  
export default Game