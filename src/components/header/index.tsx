import React from "react";

import { Avatar, Space } from "antd";
import {
  BellOutlined,
  ClockCircleOutlined,
  PlusSquareOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export const Header = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-16 border-b border-solid border-4 border-gray-200
    "
    >
      <div className="flex w-90 h-5 justify-between">
        <label>Home</label>
        <Space size={20}>
          <PlusSquareOutlined />
          <SearchOutlined />
          <BellOutlined />
          <ClockCircleOutlined />
          <SettingOutlined />
          <Avatar src="https://avatars.githubusercontent.com/u/19782782?s=400&u=170b92aa357b1a251acfaea2f8d76157d1a5aaa3&v=4" />
        </Space>
      </div>
    </div>
  );
};
