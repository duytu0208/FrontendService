import React, {useEffect, useState} from 'react';
import ListComponent from "../card/ListComponent"; // Import CardComponent_bk nếu bạn đã tạo

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Đọc file JSON từ thư mục public
    fetch('/data.json')
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Kiểm tra nếu data chưa được tải
  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Card Page</h1>

      <h1 style={{ textAlign: 'center' }}>Nguyên âm đơn - Monothongs</h1>
      <ListComponent data={data} />

    </div>
  );
}

export default Card;
