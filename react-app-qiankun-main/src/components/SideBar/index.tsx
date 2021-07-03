import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const menuOptions = [
  {
    title: "reactapp",
    path: "/reactapp",
  },
  {
    title: "reactapp/about",
    path: "/reactapp/about",
  },
  {
    title: "vueapp",
    path: "/vueapp",
  },
];

const SideBar = () => {
  const [current, setCurrent] = useState(() => {
    return menuOptions?.filter(
      (item) => item.path === window.location.pathname
    )?.[0]?.path;
  });
  const handleClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      theme="dark"
      onClick={handleClick}
      defaultOpenKeys={["sub1"]}
      selectedKeys={[current]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        {menuOptions?.map((item) => {
          return (
            <Menu.Item key={item.path} title={item.title}>
              <a href={item.path}>{item.title}</a>
            </Menu.Item>
          );
        })}
      </SubMenu>
    </Menu>
  );
};

export default SideBar;
