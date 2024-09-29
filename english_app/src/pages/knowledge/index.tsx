// pages/knowledge/index.tsx
import Link from 'next/link';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import styles from '../../styles/Knowledge.module.css'; // CSS cho trang Knowledge

const topics = [
    { id: 'html-basics', title: 'Topic 1' },
    { id: 'css-fundamentals', title: 'Topic 2' }
];

const KnowledgePage = () => {
    return (
        <Layout>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ marginLeft: '20px', flex: 1 }}>
                    <h1>Knowledge Base</h1>
                    <p>Chọn một topic để tìm hiểu thêm:</p>
                    <ul className={styles.topicList}>
                        {topics.map(topic => (
                            <li key={topic.id}>
                                <Link href={`/knowledge/${topic.id}`}>
                                    {topic.id}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default KnowledgePage;
