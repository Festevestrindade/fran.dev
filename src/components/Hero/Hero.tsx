import { animated, useSpring } from '@react-spring/web';
import { Button } from '@/components';
import './hero.css';
import { Me } from '@static/images';
const Hero = () => {
  const isMobile = window.innerWidth < 800;
  let firstBoot;
  let secondBoot;
  !isMobile &&
    ((firstBoot = useSpring({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      delay: 1900,
      config: {
        tension: 210,
        friction: 30,
      },
    })),
    (secondBoot = useSpring({
      from: {
        opacity: 0,
        y: 30,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      delay: 2200,
      config: {
        tension: 280,
        friction: 60,
      },
    })));
  return (
    <section className="hero">
      <div className="hero-box">
        <div className="text-box">
          <p className="hello-world">Hello, Hola, Olá!</p>
          <animated.h1 style={firstBoot} className="title">
            I'm <br className="break" /> <span className="name">Francisco Esteves Trindade</span>
          </animated.h1>
          <animated.div style={secondBoot}>
            <h2 className="sub-title">Designer and Frontend developer</h2>
            <p className="intro">
              I'm committed to create functional and aesthetically pleasing projects, and ready to enter many new
              challenges.
              <br></br>
              <span className="status">
                I am a self-taught person, flexible and with a great curiosity to learn and continue discovering the
                digital world. I'm currently looking for new opportunities!
              </span>
            </p>
            <Button title="See My Projects" link="#projects" />
          </animated.div>
        </div>
        <animated.div style={firstBoot} className="image-box">
          <div className="wrapper">
            <div className="image-wrapper">
              <div className="background"></div>
              <img src={Me} alt="Francisco Esteves Trindade" className="profile" />
            </div>
            <div className="tag-box">
              <p className="tag">
                It's me, Fran! <span className="wave">👋</span>{' '}
              </p>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;
