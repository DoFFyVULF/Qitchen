import './Home.scss';
import Image from 'next/image';

export default function Home() {
  return (
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
            <ul className=' flex flex-row justify-between gap-2 flex-wrap'>
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
        <a href="/menu">
          <div className="home-card">
            <Image src='/aside/Menu.png' width={300} height={400} alt='Menu' />
            <span>Menu</span>
          </div>
        </a>
        <a href="/reservation">
          <div className="home-card">
            <Image src='/aside/Reserv.png' width={300} height={400} alt='Reservation' />
            <span>Reservation</span>
          </div>
        </a>
        <a href="/about">
          <div className="home-card">
            <Image src='/aside/About.png' width={300} height={400} alt='About' />
            <span>Our Restaurant</span>
          </div></a>
      </aside>
    </div>
  );
}