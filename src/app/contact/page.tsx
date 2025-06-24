import '../contact/contact.scss';
import AnimatedContent from '@/components/animations/AnimatedContent ';

export default function Contact() {
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
            <div className="contact-wrapper">
                <div className="contact-title">
                    <h4>contact</h4>
                </div>
                <div className="contact-info">
                    <div className="contact-item contact-item-opho">
                        <h2 className="opening-hours-title">
                            <span className="diamond">&#9670;</span>
                            OPENING HOURS
                            <span className="diamond">&#9670;</span>
                        </h2>
                        <ul className="opening-hours-list">
                            <li>
                                <span className="day">Monday</span>
                                <span className="time">16:00 - 22:30</span>
                            </li>
                            <li>
                                <span className="day">Tuesday</span>
                                <span className="time">16:00 - 22:30</span>
                            </li>
                            <li>
                                <span className="day">Wednesday</span>
                                <span className="time">16:00 - 22:30</span>
                            </li>
                            <li>
                                <span className="day">Thursday</span>
                                <span className="time">16:00 - 22:30</span>
                            </li>
                            <li>
                                <span className="day">Friday</span>
                                <span className="time">16:00 - 22:30</span>
                            </li>
                            <li>
                                <span className="day">Saturday & Sunday</span>
                                <span className="time">16:00 - 22:30</span>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-item contact-items-inst">
                        <a href='https://instagram.com' className="inst-item">
                            <img src="/inst/1.png" alt="" />
                        </a>
                        <a href='https://instagram.com' className="inst-item">
                            <img src="/inst/2.png" alt="" />
                        </a>
                        <a href='https://instagram.com' className="inst-item">
                            <img src="/inst/3.png" alt="" />
                        </a>
                        <a href='https://instagram.com' className="inst-item">
                            <img src="/inst/4.png" alt="" />
                        </a>
                    </div>
                    <div className="contact-item contact-item-map">
                        <iframe className='map-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0918457577595!2d37.53818290242928!3d55.74793007019283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdd017303b9%3A0xd1f63f945a2450c2!2z0JzQvtGB0LrQstCwINCh0LjRgtC4!5e1!3m2!1sru!2sru!4v1748768262809!5m2!1sru!2sru" width="456" height="469" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="contact-item contact-item-addrs">
                        <h2 className="contact-item-addrs-title">
                            <span className="diamond">&#9670;</span>
                            Get in touch
                            <span className="diamond">&#9670;</span>
                        </h2>
                        <ul className="contact-item-info-list">
                            <li>
                                <span className="address-title">Address</span>
                                <span className="address">Presnenskaya emb., 8 building 1, Moscow, 123112</span>
                            </li>
                            <li>
                                <span className="phone-title">Phone</span>
                                <span className="phone">+8999999999</span>
                            </li>
                            <li>
                                <span className="email-title">email</span>
                                <span className="email">info@qitchen.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AnimatedContent>

    )
}