import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import Sidebar from '../../../components/Sidebar';

const subtopicsData = {
    'html-basics': {
        'html-tags': {
            title: 'HTML Tags',
            content: 'HTML tags are used to create elements in HTML.',
        },
        'html-attributes': {
            title: 'HTML Attributes',
            content: 'HTML attributes provide additional information about elements.',
        },
    },
    'css-fundamentals': {
        'css-selectors': {
            title: 'CSS Selectors',
            content: 'CSS selectors are used to target HTML elements for styling.',
        },
        'css-box-model': {
            title: 'CSS Box Model',
            content: 'The CSS box model describes the layout of HTML elements.',
        },
    }
};

const SubtopicPage = () => {
    const router = useRouter();
    const { topic, subtopic } = router.query;

    const subtopicData = subtopicsData[topic as string]?.[subtopic as string];

    return (
        <Layout>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ marginLeft: '20px', flex: 1 }}>
                    {subtopicData ? (
                        <>
                            <h1>{subtopicData.title}</h1>
                            <p>{subtopicData.content}</p>
                        </>
                    ) : (
                        <p>Không tìm thấy subtopic này. Hãy chắc chắn bạn đã chọn đúng subtopic.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default SubtopicPage;
