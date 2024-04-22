import React from "react";
import { Card, Space } from "antd";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";

interface CardProps {
  value: string;
  type: string;
  icon: React.ReactNode;
  color: string;
}

export const CardItem = ({ value, type, icon }: CardProps) => {
  return (
    <Card className="shadow" bordered style={{ width: 300, height: 100 }}>
      <div className="flex justify-between">
        <Space direction="vertical" size={5}>
          <label className="font-bold text-2xl">{value}</label>
          <label className="">{type}</label>
        </Space>
        {icon}
      </div>
    </Card>
  );
};
