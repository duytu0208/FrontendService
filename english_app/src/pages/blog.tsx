// pages/blog.tsx
import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css';

const BlogPage = () => {
    const blogPosts = [
        {
            title: 'First Blog Post',
            excerpt: 'This is the first post in my personal blog.',
        },
        {
            title: 'Next.js Journey',
            excerpt: 'Exploring the power of Next.js in modern web development.',
        },
    ];

    return (
        <Layout>
            <div className={styles.blogContainer}>
                <h1 className={styles.blogHeading}>Blog</h1>
                {blogPosts.map((post, index) => (
                    <div key={index} className={styles.blogPost}>
                        <h2 className={styles.blogTitle}>{post.title}</h2>
                        <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default BlogPage;
