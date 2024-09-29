// pages/knowledge/[topic].tsx
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';

const topicsData = {
    'html-basics': {
        title: 'Cơ Bản Về HTML',
        content: 'HTML (HyperText Markup Language) là ngôn ngữ đánh dấu chính để tạo nên các trang web. Nó cung cấp cấu trúc cơ bản cho nội dung web.',
    },
    'css-fundamentals': {
        title: 'Nền Tảng CSS',
        content: 'CSS (Cascading Style Sheets) là ngôn ngữ được sử dụng để miêu tả cách trình bày của một tài liệu viết bằng HTML. CSS định nghĩa cách mà các phần tử HTML sẽ hiển thị.',
    },
};

const TopicPage = () => {
    const router = useRouter();
    const { topic } = router.query;

    // Kiểm tra xem topic có hợp lệ hay không
    const topicData = topicsData[topic as string];

    return (
        <Layout>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ marginLeft: '20px', flex: 1 }}>
                    {topicData ? (
                        <>
                            <h1>{topicData.title}</h1>
                            <p>{topicData.content}</p>
                        </>
                    ) : (
                        <p>Không tìm thấy topic này. Hãy chắc chắn bạn đã chọn topic đúng.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default TopicPage;
