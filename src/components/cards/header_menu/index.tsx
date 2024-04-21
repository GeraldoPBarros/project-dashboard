"use client";
import React, { useState } from "react";

import { Space, Menu, Divider } from "antd";
import type { MenuProps } from "antd";
import { FilterOutlined, MenuOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    label: "Personal",
    key: "personal",
  },
  {
    label: "Portfolio",
    key: "portfolio",
  },
];

export const Header_Menu: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="flex w-full justify-between">
      <Space direction="vertical" size={5}>
        <label className="text-xl">Welcome Geraldo Barros</label>
        <label className="text-sm">Company: Software Corporation, Brazil</label>
      </Space>
      <Space direction="horizontal" size={0.1}>
        <Menu
          onClick={onClick}
          mode="horizontal"
          selectedKeys={[current]}
          items={items}
        />
        <Divider type="vertical" />
        <Space
          direction="horizontal"
          size={25}
          style={{ cursor: "pointer", marginLeft: "15px" }}
        >
          <FilterOutlined />
          <MenuOutlined />
        </Space>
      </Space>
    </div>
  );
};
