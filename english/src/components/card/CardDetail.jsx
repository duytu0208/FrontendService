import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './CardDetail.css'; // Tạo một file CSS riêng nếu cần

function CardDetail({ cardData, showFront, onToggle }) {
    // Xác định nội dung hiện tại để đọc
    const currentContent = showFront ? cardData.front : cardData.back;

    const handleSpeech = (text) => {
        const msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    };

    return (
        <div className="card">
            <div className="component2">
                {cardData.notes.map((note, index) => {
                    const noteKey = Object.keys(note)[0];
                    return (
                        <div key={index} className="note">
                            <p>{note[noteKey]}</p>
                            {note.isRead && (
                                <button
                                    className="btn-speech-note"
                                    onClick={() => handleSpeech(note[noteKey])}
                                    aria-label="Read Aloud"
                                >
                                    <FontAwesomeIcon icon={faVolumeUp} />
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
            <hr  width="90%" align="center" />
            <div
                className="component1"
                onClick={onToggle} // Chỉ đổi mặt trước/sau khi nhấn vào component1
            >
                <div className="component1-content">
                    <p>{currentContent}</p>
                </div>
                <div className="component1-buttons">
                    <button
                        className="btn-speech"
                        onClick={(e) => {
                            e.stopPropagation(); // Ngăn chặn sự kiện click từ việc thay đổi mặt trước/sau
                            handleSpeech(currentContent);
                        }}
                        aria-label="Read Aloud"
                    >
                        <FontAwesomeIcon icon={faVolumeUp} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardDetail;
