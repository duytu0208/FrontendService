// components/Sidebar.tsx
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css'; // CSS cho sidebar

const topics = [
    { id: 'html-basics', title: 'html-basics' },
    { id: 'css-fundamentals', title: 'css-fundamentals' }
];

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h3>Topics</h3>
            <ul>
                {topics.map(topic => (
                    <li key={topic.id}>
                        <Link href={`/knowledge/${topic.id}`}>
                            {topic.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
