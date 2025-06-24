import Image from "next/image"
import "../menu/menu.scss"
import AnimatedContent from "@/components/animations/AnimatedContent ";
export default function Menu() {


    const menuItems = [
        // Maki Rolls
        {
            id: 1,
            name: "Spicy Tuna Maki",
            desc: "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
            cost: "5",
            category: "maki",
            img: "/food/pic1.png"
        },
        {
            id: 2,
            name: "Mango Maki",
            desc: "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
            cost: "5",
            category: "maki",
            img: "/food/pic2.png"
        },
        {
            id: 3,
            name: "Salmon Maki",
            desc: "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
            cost: "5",
            category: "maki",
            img: "/food/pic3.png"
        },
        {
            id: 4,
            name: "Tuna Maki",
            desc: "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
            cost: "5",
            category: "maki",
            img: "/food/pic4.png"
        },

        // UraMaki Rolls
        {
            id: 5,
            name: "Volcano Delight",
            desc: "Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.",
            cost: "12",
            category: "uramaki",
            img: "/food/pic5.png"
        },
        {
            id: 6,
            name: "Rainbow Fusion",
            desc: "A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.",
            cost: "12",
            category: "uramaki",
            img: "/food/pic6.png"
        },
        {
            id: 7,
            name: "Dragon Elegance",
            desc: "Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.",
            cost: "12",
            category: "uramaki",
            img: "/food/pic7.png"
        },
        {
            id: 8,
            name: "Sunset Serenity",
            desc: "Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.",
            cost: "12",
            category: "uramaki",
            img: "/food/pic8.png"
        },
        {
            id: 9,
            name: "Mystic Garden",
            desc: "Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.",
            cost: "12",
            category: "uramaki",
            img: "/food/pic9.png"
        },
        {
            id: 10,
            name: "Ocean Breeze",
            desc: "A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.",
            cost: "12",
            category: "uramaki",
            img: "/food/pic10.png"
        },
        {
            id: 11,
            name: "Tokyo Blossom",
            desc: "Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.",
            cost: "12",
            category: "uramaki",
            img: "/food/pic11.png"
        },

        // Special Rolls
        {
            id: 12,
            name: "Sunrise Bliss",
            desc: "A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.",
            cost: "16",
            category: "special",
            img: "/food/pic12.png"
        },
        {
            id: 13,
            name: "Mango Tango",
            desc: "Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.",
            cost: "16",
            category: "special",
            img: "/food/pic13.png"
        },
        {
            id: 14,
            name: "Truffle Indulgence",
            desc: "Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.",
            cost: "16",
            category: "special",
            img: "/food/pic14.png"
        },
        {
            id: 15,
            name: "Pacific Firecracker",
            desc: "Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.",
            cost: "16",
            category: "special",
            img: "/food/pic15.png"
        },
        {
            id: 16,
            name: "Eternal Eel",
            desc: "An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.",
            cost: "16",
            category: "special",
            img: "/food/pic16.png"
        }
    ];

    type MenuItem = {
        id: number;
        name: string;
        desc: string;
        cost: string;
        category: string;
        img: string;
    };

    const categories = ["maki", "uramaki", "special"] as const;
    type Category = typeof categories[number];

    function isCategory(category: string): category is Category {
        return categories.includes(category as Category);
    }

    const groupedMenu = menuItems.reduce((acc, item) => {
        if (!isCategory(item.category)) return acc;

        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<Category, MenuItem[]>);



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
      <main>
            <section className="menu-wrapper">
                <div className="menu-title">
                    <h4>Menu</h4>
                </div>
                <div className="menu">
                    <div className="food-category">
                        <ul>
                            {categories.map((category) => (
                                <li key={category}>
                                    <a href={`#${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {Object.entries(groupedMenu).map(([category, items]) => (
                        <div className="menu-category" key={category}>
                            <h2 className="category-title">{category}</h2>
                            {items.map(item => (
                                <div className="food-item" key={item.id} id={category}>
                                    <img src={item.img} alt={item.name} />
                                    <div className="food-item-info">
                                        <span className="food-title">{item.name}</span>
                                        <span className="food-desc">{item.desc}</span>
                                    </div>
                                    <span className="food-cost">${item.cost}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </main>

  </AnimatedContent>
      
    )
}