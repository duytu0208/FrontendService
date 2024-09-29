// pages/knowledge.tsx
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

const KnowledgePage = () => {
    return (
        <Layout>
            <h1>Knowledge</h1>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ marginLeft: '20px', flex: 1 }}>
                    <h2>Topics</h2>
                    <p>Content related to various topics will be displayed here.</p>
                </div>
            </div>
        </Layout>
    );
};

export default KnowledgePage;
