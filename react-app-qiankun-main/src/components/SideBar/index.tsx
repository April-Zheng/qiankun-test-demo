import React from "react";
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
  const handleClick = () => {};

  return (
    <Menu
      theme="dark"
      onClick={handleClick}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        {menuOptions?.map((item) => {
          return (
            <Menu.Item key={item.path}>
              <a href={item.path}>{item.title}</a>
            </Menu.Item>
          );
        })}
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SideBar;
