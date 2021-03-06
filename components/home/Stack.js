import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Stack = () => {
  return (
    <section className="tech-stack">
      <h2>My Experience</h2>
      <p className="lead">Front-End meets Back-End</p>
      <div className="stack">
        <div className="individual-stack">
          <FontAwesomeIcon icon={["fab", "react"]} />
          <h3>Front End Development</h3>
          <p>
            From PSD to interactive sites, I have experience with a wide array
            of technologies that make me an efficient developer. I enjoy
            creating websites from scratch and with the BootStrap framework.
          </p>
        </div>
        <div className="individual-stack">
          <FontAwesomeIcon icon={["fab", "laravel"]} />
          <h3>Front End Development</h3>
          <p>
            From PSD to interactive sites, I have experience with a wide array
            of technologies that make me an efficient developer. I enjoy
            creating websites from scratch and with the BootStrap framework.
          </p>
        </div>
        <div className="individual-stack">
        <FontAwesomeIcon icon="robot" />
          <h3>Front End Development</h3>
          <p>
            From PSD to interactive sites, I have experience with a wide array
            of technologies that make me an efficient developer. I enjoy
            creating websites from scratch and with the BootStrap framework.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stack;
