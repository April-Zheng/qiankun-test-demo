import React, { useEffect } from "react";
import { ConfigProvider } from "antd";
import PageLayout from "@/pages/layout";
import { registerApps } from "./qiankun";
import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  useEffect(() => registerApps(), []);

  return (
    // <ConfigProvider prefixCls="rc-main">
    <div className="App">
      <PageLayout />
    </div>
    // </ConfigProvider>
  );
};

export default App;
