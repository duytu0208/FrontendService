import React, {useEffect, useState} from 'react';
import ListComponent from "../card/ListComponent"; // Import CardComponent_bk nếu bạn đã tạo

function NguyenAmCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Đọc file JSON từ thư mục public
    fetch('/nguyenAmDon.json')
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const [data2, setData2] = useState([]);

  useEffect(() => {
        // Đọc file JSON từ thư mục public
        fetch('/nguyenAmDoi.json')
            .then((response) => response.json())
            .then((jsonData) => setData2(jsonData))
            .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Kiểm tra nếu data chưa được tải
  if (data.length === 0) {
    return <div>Loading...</div>;
  }

    if (data2.length === 0) {
        return <div>Loading...</div>;
    }

  return (
    <div>
      <h1>Card Page</h1>

      <h1 style={{ textAlign: 'center' }}>Nguyên âm đơn - Monothongs</h1>
      <ListComponent data={data} />

      <h1 style={{ textAlign: 'center' }}>Nguyên âm đôi - Dipthongs</h1>
      <ListComponent data={data2} />

    </div>
  );
}

export default NguyenAmCard;
