// pages/knowledge/index.tsx
import { useState } from 'react';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import HtmlBasics from '../../components/topics/HtmlBasics'; // Import component để hiển thị flash cards

const topics = [
    {
        id: 'html-basics',
        title: 'HTML Basics',
        subtopics: [
            {
                id: 'html-tags',
                title: 'HTML Tags',
                subtopics: [
                    { id: 'css-selectors',
                        title: 'CSS Selectors',
                        subtopics: [
                            { id: 'css-box-model', title: 'CSS Box Model' }
                        ]
                    }
                ]
            },
            { id: 'html-attributes', title: 'HTML Attributes' }
        ]
    },
    {
        id: 'css-fundamentals',
        title: 'CSS Fundamentals',
        subtopics: [

        ]
    }
];

const KnowledgePage = () => {
    const [content, setContent] = useState<JSX.Element | null>(null);

    const handleTopicClick = (topicId: string) => {
        let component: JSX.Element | null = null; // Khởi tạo biến component

        // Hiển thị nội dung cho từng topic dựa trên topicId
        switch (topicId) {
            case 'html-basics':
                component = <HtmlBasics />;
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
                    <h1>Knowledge Base</h1>
                    {content || <p>Hãy chọn một topic từ sidebar để hiển thị nội dung.</p>}
                </div>
            </div>
        </Layout>
    );
};

export default KnowledgePage;
