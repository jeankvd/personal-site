import '../styles/style.scss'
import Hero from '../components/home/Hero'
import Page from '../components/wrapper/page'
import Stack from '../components/home/Stack'

export default () => {
  return(
  <Page>
    <div className="main home">
      <div className="hero">
        <Hero />
      </div>
      <div className="content">
      <section className="about-me">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, eveniet illum? Laboriosam omnis dicta assumenda quod quo debitis, quaerat officia voluptatem sed ipsa voluptatibus in deserunt itaque et, adipisci iusto.
      </section>
      <Stack />
      </div>
    </div>
  </Page>
  )
}
