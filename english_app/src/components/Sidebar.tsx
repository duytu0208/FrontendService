import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styles from '../styles/Sidebar.module.css'; // CSS cho sidebar

const topics = [
    {
        id: 'html-basics',
        title: 'HTML Basics',
        subtopics: [
            { id: 'html-tags', title: 'HTML Tags' },
            { id: 'html-attributes', title: 'HTML Attributes' }
        ]
    },
    {
        id: 'css-fundamentals',
        title: 'CSS Fundamentals',
        subtopics: [
            { id: 'css-selectors', title: 'CSS Selectors' },
            { id: 'css-box-model', title: 'CSS Box Model' }
        ]
    }
];

const Sidebar = () => {
    const [expandedTopics, setExpandedTopics] = useState<string[]>([]);

    const toggleSubtopics = (id: string) => {
        if (expandedTopics.includes(id)) {
            setExpandedTopics(expandedTopics.filter(topicId => topicId !== id));
        } else {
            setExpandedTopics([...expandedTopics, id]);
        }
    };

    return (
        <div className={styles.sidebar}>
            <h3>Topics</h3>
            <ul>
                {topics.map(topic => (
                    <li key={topic.id}>
                        <div
                            className={styles.topicItem}
                            onClick={() => toggleSubtopics(topic.id)}
                        >
                            {expandedTopics.includes(topic.id) ? (
                                <FaChevronDown className={styles.icon} />
                            ) : (
                                <FaChevronRight className={styles.icon} />
                            )}
                            <Link href={`/knowledge/${topic.id}`}>
                                {topic.title}
                            </Link>
                        </div>
                        {expandedTopics.includes(topic.id) && (
                            <ul className={styles.subtopics}>
                                {topic.subtopics.map(subtopic => (
                                    <li key={subtopic.id}>
                                        <Link href={`/knowledge/${topic.id}/${subtopic.id}`}>
                                            {subtopic.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
