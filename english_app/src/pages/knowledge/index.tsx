// pages/knowledge/index.tsx
import { useState } from 'react';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Kindergarten from '../../components/topics/Kindergarten'; // Import component để hiển thị flash cards
import Firstgrade from '../../components/topics/Firstgrade'; // Import component để hiển thị flash cards

type Topic = {
    id: string;
    title: string;
    subtopics: {
        id: string;
        title: string;
    }[];
};

const topics: Topic[] = [
    {
        id: 'kindergarten',
        title: 'Kindergarten',
        subtopics: []
    },
    {
        id: 'firstgrade',
        title: 'Firstgrade',
        subtopics: []
    }
];

const KnowledgePage = () => {
    const [content, setContent] = useState<JSX.Element | null>(null);

    const handleTopicClick = (topicId: string) => {
        let component: JSX.Element | null = null; // Khởi tạo biến component

        // Hiển thị nội dung cho từng topic dựa trên topicId
        switch (topicId) {
            case 'kindergarten':
                component = <Kindergarten />;
                break;
            case 'firstgrade':
                component = <Firstgrade />;
                break;
            // Thêm các case cho các topic khác nếu có
            default:
                component = <p>Hãy chọn một topic từ sidebar để hiển thị nội dung.</p>;
        }

        setContent(component); // Gọi setContent với component
    };

    return (
        <Layout>
            <div style={{ display: 'flex' }}>
                <Sidebar topics={topics} setContent={handleTopicClick} /> {/* Truyền handleTopicClick */}
                <div style={{ marginLeft: '20px', flex: 1 }}>
                    {/*<h1>=== Knowledge Base ===</h1>*/}
                    {content || <p>Hãy chọn một topic từ sidebar để hiển thị nội dung.</p>}
                </div>
            </div>
        </Layout>
    );
};

export default KnowledgePage;
