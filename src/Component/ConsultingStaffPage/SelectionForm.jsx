import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Radio, Button, Form, Typography, Row, Col } from 'antd';

const { Title } = Typography;

function SelectionForm() {
  const [loai, setLoai] = useState('');
  const [trangThai, setTrangThai] = useState('');
  const [xuatXu, setXuatXu] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const handleLoaiChange = (e) => {
    const value = e.target.value;
    setLoai(value);
    if (value === 'Đá Giả Kim Cương') {
      setTrangThai(''); // Reset trạng thái
      setXuatXu(''); // Reset xuất xứ
    }
  };

  const handleSubmit = () => {
    if (loai && (loai === 'Đá Giả Kim Cương' || (trangThai && xuatXu))) {
      const selectedOptions = { loai, trangThai, xuatXu };
      navigate(`/assessmentstaff/assessmentbooking/${id}/selection/info`, { state: selectedOptions });
    } else {
      alert('Vui lòng chọn tất cả các thuộc tính.');
    }
  };

  return (
    <Form onFinish={handleSubmit} className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-12">
      <div className="text-center mb-8">
        <Title level={2} className="m-0">
          Thuộc Tính
        </Title>
      </div>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Form.Item label={<span className="font-bold text-lg">Type</span>} className="mb-6">
            <Radio.Group onChange={handleLoaiChange} value={loai} className="flex space-x-4">
              <Radio value="Kim Cương" className="text-lg">Diamond</Radio>
              <Radio value="Đá Giả Kim Cương" className="text-lg">Diamond-Like</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label={<span className="font-bold text-lg">Status</span>} className="mb-6">
            <Radio.Group
              onChange={(e) => setTrangThai(e.target.value)}
              value={trangThai}
              disabled={loai === 'Đá Giả Kim Cương'}
              className="flex space-x-4"
            >
              <Radio value="Đã Xử Lý" className="text-lg">Processed</Radio>
              <Radio value="Chưa Xử Lý" className="text-lg">Not Processed</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label={<span className="font-bold text-lg">Origin</span>} className="mb-6">
            <Radio.Group
              onChange={(e) => setXuatXu(e.target.value)}
              value={xuatXu}
              disabled={loai === 'Đá Giả Kim Cương'}
              className="flex space-x-4"
            >
              <Radio value="Tự Nhiên" className="text-lg">Natural</Radio>
              <Radio value="Nhân Tạo" className="text-lg">Non-Natural</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item className="flex justify-center">
            <Button type="primary" htmlType="submit" className="w-40 text-lg py-2">
              Tiếp theo
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default SelectionForm;
