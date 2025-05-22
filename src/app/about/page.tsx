import '../about/about.scss'

export default function About() {
    return (
        <main>
            <div className="about-wrapper">
                <div className="about-title">
                    <h4>About</h4>
                </div>

                <div className="about-cards">
                    {/* Верхние карточки */}
                    <div className="card card1">
                        <h2>Sushi Artistry Redefined</h2>
                        <p>Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.</p>
                    </div>

                    <div className="card card p-0">
                        <img src="/images/ab1.png" alt="Sushi presentation" />
                    </div>

                    {/* Отзывы */}
                    <div className="cards-review review1">
                        <span>⭐⭐⭐⭐⭐</span>
                        <h3>Trip Advisor</h3>
                        <span>Best Steak House Prague</span>
                    </div>

                    <div className="cards-review review2">
                        <span>⭐⭐⭐⭐⭐</span>
                        <h3>Google Reviews</h3>
                        <span>Top Rated Restaurant</span>
                    </div>

                    <div className="cards-review review3">
                        <span>⭐⭐⭐⭐⭐</span>
                        <h3>Zomato</h3>
                        <span>Popular Choice Award</span>
                    </div>

                    {/* Нижние карточки */}
                    <div className="card p-0">
                        <img src="/images/ab1.png" alt="Interior view" />
                    </div>

                    <div className="card card4">
                        <h2>Modern Culinary Experience</h2>
                        <p>Our team of master chefs combines traditional techniques with contemporary innovation to create unforgettable dining experiences.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}