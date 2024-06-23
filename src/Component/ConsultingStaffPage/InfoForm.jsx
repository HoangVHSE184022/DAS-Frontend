import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Form, InputNumber, Button, Typography, Select } from "antd";

const { Title } = Typography;
const { Option } = Select;

function InfoForm() {
  const [carat, setCarat] = useState(0);
  const [colorGrade, setColorGrade] = useState("");
  const [clarityGrade, setClarityGrade] = useState("");
  const [cutGrade, setCutGrade] = useState("");
  const [size, setSize] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { loai, trangThai, xuatXu } = location.state || {};

  const handleSubmit = () => {
    const reportData = {
      loai,
      trangThai,
      xuatXu,
      carat,
      colorGrade,
      clarityGrade,
      cutGrade,
      size,
    };

    navigate(
      `/assessmentstaff/assessmentbooking/${id}/selection/info/summary`,
      { state: reportData }
    );
  };

  return (
    <Form
      onFinish={handleSubmit}
      className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-12"
    >
      <div className="text-center mb-8">
        <Title level={2} className="text-gray-700">
          Thông tin kim cương
        </Title>
      </div>
      <Form.Item
        label={<span className="font-bold text-lg">Carat Weight</span>}
        name="carat"
        rules={[
          { required: true, message: "Vui lòng điền trọng lượng carat!" },
        ]}
        className="mb-6"
      >
        <InputNumber
          value={carat}
          onChange={(value) => setCarat(value)}
          className="w-full text-lg"
          min={0}
          step={0.01}
          placeholder="Enter carat weight"
        />
      </Form.Item>

      <Form.Item
        label={<span className="font-bold text-lg">Size</span>}
        name="size"
        rules={[
          { required: true, message: "Vui lòng điền kích cỡ kim cương!" },
        ]}
        className="mb-6"
      >
        <InputNumber
          value={size}
          onChange={(value) => setSize(value)}
          className="w-full text-lg"
          min={0}
          step={0.01}
          placeholder="Enter size"
        />
      </Form.Item>

      <Form.Item
        label={<span className="font-bold text-lg">Color Grade</span>}
        name="colorGrade"
        rules={[{ required: true, message: "Vui lòng điền lớp màu!" }]}
        className="mb-6"
      >
        <Select
          value={colorGrade}
          onChange={(value) => setColorGrade(value)}
          className="w-full text-lg"
          placeholder="Select color grade"
          dropdownRender={(menu) => (
            <div className="shadow-lg">{menu}</div>
          )}
        >
          {[
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ].map((grade) => (
            <Option key={grade} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label={<span className="font-bold text-lg">Clarity Grade</span>}
        name="clarityGrade"
        rules={[{ required: true, message: "Vui lòng điền lớp rõ ràng!" }]}
        className="mb-6"
      >
        <Select
          value={clarityGrade}
          onChange={(value) => setClarityGrade(value)}
          className="w-full text-lg"
          placeholder="Select clarity grade"
          dropdownRender={(menu) => (
            <div className="shadow-lg">{menu}</div>
          )}
        >
          {[
            "Flawless",
            "Internally Flawless",
            "VVS1",
            "VVS2",
            "VS1",
            "VS2",
            "SI1",
            "SI2",
            "I1",
            "I2",
            "I3",
          ].map((grade) => (
            <Option key={grade} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label={<span className="font-bold text-lg">Cut Grade</span>}
        name="cutGrade"
        rules={[{ required: true, message: "Vui lòng điền cắt lớp!" }]}
        className="mb-6"
      >
        <Select
          value={cutGrade}
          onChange={(value) => setCutGrade(value)}
          className="w-full text-lg"
          placeholder="Select cut grade"
          dropdownRender={(menu) => (
            <div className="shadow-lg">{menu}</div>
          )}
        >
          {["Excellent", "Very Good", "Good", "Fair", "Poor"].map((grade) => (
            <Option key={grade} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item className="text-center">
        <Button
          type="primary"
          htmlType="submit"
          className="mt-4 w-40 text-lg py-2"
        >
          Tiếp theo
        </Button>
      </Form.Item>
    </Form>
  );
}

export default InfoForm;
