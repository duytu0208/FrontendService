import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './CardDetail.css'; // Tạo một file CSS riêng nếu cần

function CardDetail({ cardData, showFront, onToggle }) {
    // Xác định nội dung hiện tại để đọc
    const currentContent = showFront ? cardData.front : cardData.back;

    const handleSpeech = (text) => {
        const msg = new SpeechSynthesisUtterance(text);
        msg.rate = 0.75; // Đặt tốc độ đọc xuống 0.75
        window.speechSynthesis.speak(msg);
    };


    return (
        <div className="card">
            <div className="component2">
                {cardData.notes.map((note, index) => {
                    const noteKey = Object.keys(note)[0];
                    return (
                        <div key={index} className="note">
                            <div className="note-content"> {/* Thêm div này */}
                                {note.isRead && (
                                    <button
                                        className="btn-speech-note"
                                        onClick={() => handleSpeech(note[noteKey])}
                                        aria-label="Read Aloud"
                                    >
                                        <FontAwesomeIcon icon={faVolumeUp} />
                                    </button>
                                )}
                                <p>{note[noteKey]}</p>
                            </div>
                            {/*<hr width="90%" align="center" />*/}
                        </div>
                    );
                })}
            </div>
            <div
                className={`component1 ${showFront ? 'front' : 'back'}`} // Áp dụng class tùy thuộc vào showFront
                onClick={onToggle} // Chỉ đổi mặt trước/sau khi nhấn vào component1
            >
                <div className={`component1-content ${showFront ? 'front-content' : 'back-content'}`}>
                    {currentContent}
                </div>
                {/*<div className="component1-buttons">*/}
                {/*    <button*/}
                {/*        className="btn-speech"*/}
                {/*        onClick={(e) => {*/}
                {/*            e.stopPropagation(); // Ngăn chặn sự kiện click từ việc thay đổi mặt trước/sau*/}
                {/*            handleSpeech(currentContent);*/}
                {/*        }}*/}
                {/*        aria-label="Read Aloud"*/}
                {/*    >*/}
                {/*        <FontAwesomeIcon icon={faVolumeUp} />*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>

            <audio controls="controls">
                <source src={cardData.audio} type="audio/mpeg"/>
            </audio>
        </div>
    );
}

export default CardDetail;
