export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Brandistone</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
          developing innovative blockchain solutions that empower businesses and individuals to unlock the potential of decentralized technologies, ensuring secure, transparent, and scalable systems.
            {/* <br /> Dolorum, quas. Amet soluta assumenda cum? */}
          </p>
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
        <img src="./img/mee.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
