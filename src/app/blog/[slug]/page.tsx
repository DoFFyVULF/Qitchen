"use client";
import { useParams } from "next/navigation";
import { posts } from "@/data/posts";
import style from './/blogSlug.module.scss'
import AnimatedContent from "@/components/animations/AnimatedContent ";

export default function Post() {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);


    if (!post) return <div>Пост не найден</div>;

    const paragraphs = post.text?.split('\n\n')



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
    <div className={style.postWrapper}>
            <div className={style.postTitle}>
                <img src={post.img} alt="" />
            </div>
            <div className={style.postInfo}>
                <h1>{post.title}</h1>

                {paragraphs?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}

            </div>
        </div>
        </AnimatedContent>
    
    );
}