import { HolderOutlined } from "@ant-design/icons";
import { Space } from "antd";
import React from "react";

export const StatusGraphic: React.FC = () => {
  return (
    <div className="flex w-70 shadow">
      <Space direction="vertical" size={10}>
        <Space direction="horizontal" size={10}>
          <HolderOutlined />
          <label className="font-bold text-base">Projects Status Report</label>
        </Space>
      </Space>
    </div>
  );
};
