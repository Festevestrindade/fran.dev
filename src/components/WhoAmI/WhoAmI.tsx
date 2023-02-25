import { useInView, animated } from '@react-spring/web';
import './whoami.css';
const WhoAmI = () => {
  const isMobile = window.innerWidth < 475;
  let ref;
  let springs;
  !isMobile &&
    ([ref, springs] = useInView(
      () => ({
        from: {
          y: 50,
          opacity: 0,
        },
        to: {
          y: -20,
          opacity: 1,
        },
        config: {
          duration: 500,
        },
      }),
      {
        once: true,
        rootMargin: '0px 0px -30% 0px',
      },
    ));
  return (
    <section id="about" className="whoami">
      <div className="text-box">
        <h3 className="title">About</h3>
        <p className="text">
          My name is Francisco. I'm a frontend web developer and designer from Portugal. I'm{' '}
          <span className="bold">passionate</span> about cutting-edge, pixel-perfect, responsive user interfaces, and
          dynamic user experiences.{' '}
        </p>

        <p className="text">
          The technology world has always been my great passion. I’ve enjoyed exploring and learning about different
          technologies since I was a child. Being able to design and work in a{' '}
          <span className="bold">leading global</span> innovation company is my next challenge. I am a self-taught
          person, flexible and with a great curiosity to learn and continue discovering the{' '}
          <span className="bold">digital world.</span>
        </p>

        <p className="text">
          Nowadays, I work with <span className="bold">HTML</span>, <span className="bold">CSS</span> and{' '}
          <span className="bold">JavaScript</span>,{' '}
          <span className="bold">
            JS frameworks and <span className="bold">Phython.</span>
          </span>{' '}
          In the design side I use daily the Adobe{' '}
          <span className="bold">Photoshop, Illustrator, XD, InDesign, Premiere.</span> In the Banners, Google Web
          Designer and Sizmek.
        </p>
      </div>
    </section>
  );
};

export default WhoAmI;
