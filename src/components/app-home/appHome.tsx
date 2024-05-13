import "./appHome.scss";
import line from "./../../assets/line.png";
import Andvantages from "../advantage-item/appAdvantages";

function AppHome() {

  return (
    <div className="container d-grid d-lg-flex justify-content-center justify-content-lg-between">
      <div className="home__heading d-grid">
        <p className="home__headline headline">Путешествие</p>
        <p className="home__subHeadline body-bold">на красную планету</p>
      </div>
      <div className="home__button-wrapper d-flex">
        <button className="home__button">
          <p className="home__button_text text-nowrap body">начать путешествие</p>
        </button>
        <img className="home__line d-none d-lg-block" src={line} alt='line to button'/>
      </div>
      <div className="home__andvantages">
        <Andvantages/>
      </div>
    </div>
  )
}

export default AppHome;