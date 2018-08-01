import '../styles/style.scss'
import Hero from '../components/home/Hero'
import Page from '../components/wrapper/page'

export default () => {
  return(
  <Page>
    <div className="main home">
      <div className="hero">
        <Hero />
      </div>
    </div>
  </Page>
  )
}
