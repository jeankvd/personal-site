import '../styles/style.scss'
import Navbar from '../components/header/Navbar'
import Hero from '../components/home/Hero'

export default () => {
  return(
  <div className="">
    <Navbar />
    <div className="main home">
      <div className="hero">
        <Hero />
      </div>
    </div>
  </div>
  )
}
