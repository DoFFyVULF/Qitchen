import '../blog/blog.scss';
import { generateSlug } from '@/lib/slugGen';
import { posts } from '@/data/posts';
import AnimatedContent from '@/components/animations/AnimatedContent ';

export default function Blog() {


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
            <div className="blog-wrapper">
                <div className="blog-title">
                    <h4>Blog</h4>
                </div>
                <div className="blog-posts">
                    <h2>Behind the Scenes & Latest News</h2>
                    {posts.map(post => (
                        <a href={`/blog/${generateSlug(post.title)}`} className="blog-post" key={post.id} >
                            <div className="post-img">
                                <img src={post.img} alt="" />
                            </div>
                            <div className="post-info">
                                <span>{post.date}</span>
                                <h5>{post.title}</h5>
                                <p>{post.text_preview}</p>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </AnimatedContent>

    )
}