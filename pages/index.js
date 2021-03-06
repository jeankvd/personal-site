import "../styles/style.scss";
import Hero from "../components/home/Hero";
import Page from "../components/wrapper/page";
import Stack from "../components/home/Stack";
import Work from "../components/home/Work";
import Skills from "../components/home/Skills";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { faReact, faLaravel } from '@fortawesome/free-brands-svg-icons';

library.add(faReact);
library.add(faLaravel);
library.add(faRobot);

export default () => {
  return (
    <Page>
      <div className="main home">
        <div className="hero">
          <Hero />
        </div>
        <div className="content">
          <section className="about-me">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
            eveniet illum? Laboriosam omnis dicta assumenda quod quo debitis,
            quaerat officia voluptatem sed ipsa voluptatibus in deserunt itaque
            et, adipisci iusto.
          </section>
          <Stack />
          <Work />
          <Skills />
        </div>
      </div>
    </Page>
  );
};
