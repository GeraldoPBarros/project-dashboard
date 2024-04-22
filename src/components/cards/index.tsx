import React from "react";
import { Header_Menu } from "./header_menu";
import { CardItem } from "./card";
import { CheckSquareOutlined, FileExclamationOutlined, FolderOpenOutlined, ReconciliationOutlined, UsergroupAddOutlined } from "@ant-design/icons";

export const Cards = () => {
  return (
    <div className="flex px-4 py-4 w-full justify-between flex-col">
      <Header_Menu />
      <div className="flex w-full justify-between mt-5">
        <CardItem value="109" color="" type="Active Projects" icon={<ReconciliationOutlined style={{ fontSize: "35px", opacity: 0.2}} />} />
        <CardItem value="7" color="" type="Completed Projects" icon={<CheckSquareOutlined style={{ fontSize: "35px", opacity: 0.2}} />} />
        <CardItem value="1226" color="" type="Open Tasks" icon={<FolderOpenOutlined style={{ fontSize: "35px", opacity: 0.2}} />} />
        <CardItem value="151" color="" type="Open Issues" icon={<FileExclamationOutlined style={{ fontSize: "35px", opacity: 0.2}} />} />
        <CardItem value="21" color="" type="Client Companies" icon={<UsergroupAddOutlined style={{ fontSize: "35px", opacity: 0.2}} />} />
      </div>
    </div>
  );
};
