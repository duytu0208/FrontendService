import React from 'react';
import CardComponent from '../card/CardComponent'; // Import CardComponent nếu bạn đã tạo

function Card() {
  // Dữ liệu mẫu cho CardComponent
  const data = {
    front: 'Front Content',
    back: 'Back Content',
    notes: [
      { note1: 'Note 1', isRead: true },
      { note2: 'Note 2', isRead: false }
    ]
  };

  return (
    <div>
      <h1>Card Page</h1>
      <CardComponent data={data} />
    </div>
  );
}

export default Card;
