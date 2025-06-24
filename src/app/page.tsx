import './Home.scss';
import AnimatedContent from '@/components/animations/AnimatedContent ';
import Image from 'next/image';

export default function Home() {
  return (
    <AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.5}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.0}
  threshold={0}
  delay={0}
>
  <div className="home-container">
      <section className="home-section">
        <div className="video-container">
          <video src="/Video/Home.mp4" autoPlay muted loop playsInline></video>
        </div>
        <div className="home-main">
          <div className="home-title">
            <h1>Sushi Sensation</h1>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="https://instagram.com">
                  <Image src='/icons/insta.svg' alt='instagram' width={45} height={45} />
                </a>
              </li>
              <li>
                <a href="https://facebook.com">
                  <Image src='/icons/facebook.svg' alt='instagram' width={45} height={45} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <Image src='/icons/twitter.svg' alt='instagram' width={45} height={45} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <aside className="home-aside">
        <a href="/menu" className="home-card">
          <div className="card-image">
            <img src="/aside/Menu.png" alt="Menu" />
          </div>
          <div className="card-content">
            <span>Menu</span>
          </div>
        </a>
        <a href="/reservation" className="home-card">
          <div className="card-image">
            <img src="/aside/Reserv.png" alt="Reservation" />
          </div>
          <div className="card-content">
            <span>Reservation</span>
          </div>
        </a>
        <a href="/about" className="home-card">
          <div className="card-image">
            <img src="/aside/About.png" alt="About" />
          </div>
          <div className="card-content">
            <span>Our Restaurant</span>
          </div>
        </a>
      </aside>
    </div>
</AnimatedContent>
  );
}