import '../styles/style.scss'
import Navbar from '../components/header/Navbar'

export default () => {
  return(
  <div>
    <Navbar />
    <div className="layout">
      <div className="about-page">
      <div className="about-content">
        <div className="about-name">
          <h1>Jean Villalobos</h1>
        </div>
        <div className="about-bio">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, delectus! Aspernatur unde et obcaecati ducimus sint nisi dolor blanditiis doloribus odit quos, iste maiores sed possimus, est magni atque eaque.
          </p>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}
