import React, { useState } from 'react';
import CardDetail from './CardDetail';
import './ListComponent.css';

function ListComponent({ data }) {
    // Tạo state để theo dõi trạng thái của từng thẻ (mặc định tất cả thẻ hiển thị mặt trước)
    const [showFront, setShowFront] = useState(data.map(() => true));

    // Hàm chuyển đổi mặt trước/mặt sau của thẻ
    const toggleCard = (index) => {
        setShowFront((prevShowFront) => {
            const newShowFront = [...prevShowFront];
            newShowFront[index] = !newShowFront[index]; // Chỉ thay đổi trạng thái của thẻ được click
            return newShowFront;
        });
    };

    // Hàm reset tất cả thẻ về trạng thái mặt trước
    const resetAllCards = () => {
        setShowFront(data.map(() => true));
    };

    return (
        <div className="list-container">
            <button className="btn-reset" onClick={resetAllCards}>
                Reset All Cards to Front
            </button>
            <div className="card-container">
                {data.map((item, itemIndex) => (
                    <CardDetail
                        key={itemIndex}
                        cardData={item}
                        showFront={showFront[itemIndex]}
                        onToggle={() => toggleCard(itemIndex)} // Chỉ đổi mặt trước/sau khi nhấn vào thẻ này
                    />
                ))}
            </div>
        </div>
    );
}

export default ListComponent;
