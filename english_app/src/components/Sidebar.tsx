// src/components/Sidebar.tsx
import { useState } from 'react';
import styles from '../styles/Sidebar.module.css'; // CSS cho sidebar

const Sidebar = ({ topics, setContent }: { topics: Array<{ id: string; title: string; subtopics: Array<{ id: string; title: string }> }>; setContent: (topicId: string) => void }) => {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    const handleTopicClick = (topicId: string) => {
        setSelectedTopic(topicId);
        setContent(topicId);
    };

    const renderSubtopics = (subtopics: any[]) => {
        return (
            <ul>
                {subtopics.map((subtopic) => (
                    <li key={subtopic.id}>
                        <div
                            onClick={() => handleTopicClick(subtopic.id)}
                            className={`${styles.subtopic} ${selectedTopic === subtopic.id ? styles.selected : ''}`}
                        >
                            {subtopic.title}
                        </div>
                        {subtopic.subtopics && subtopic.subtopics.length > 0 && renderSubtopics(subtopic.subtopics)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className={styles.sidebar}>
            <h2>Topics</h2>
            <ul>
                {topics.map((topic) => (
                    <li key={topic.id}>
                        <div
                            onClick={() => handleTopicClick(topic.id)}
                            className={`${styles.topic} ${selectedTopic === topic.id ? styles.selected : ''}`}
                        >
                            {topic.title}
                        </div>
                        {topic.subtopics && topic.subtopics.length > 0 && renderSubtopics(topic.subtopics)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
