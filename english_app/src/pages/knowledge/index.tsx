// pages/knowledge/index.tsx
import { useState } from 'react';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Kindergarten from '../../components/topics/Kindergarten'; // Import component để hiển thị flash cards

const topics = [
    {
        id: 'kindergarten',
        title: 'Kindergarten',
        // subtopics: [
        //     {
        //         id: '01_1',
        //         title: 'Nguyên Âm',
        //         subtopics: [
        //             { id: 'css-selectors', title: 'CSS Selectors'}
        //         ]
        //     }
        // ]
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
