import React, { useState } from "react";
import { Layout, Result } from "antd";
import {
  getGlobalState,
  onGlobalStateChange,
  setGlobalState,
} from "@/qiankun/actions";
import { MicroAppLoadState } from "@/qiankun/type";
import SideBar from "@/components/SideBar";
import "./index.scss";

const { Header, Sider, Content } = Layout;

const PageLayout = () => {
  const [GolbalState, setGolbalState] = useState<any>(() => getGlobalState());

  onGlobalStateChange((val) => {
    setGolbalState(val);
  });

  return (
    <Layout className="layout">
      <Header className="layout__header">
        <div>{GolbalState?.user}</div>
        <div
          className="btn"
          onClick={() => {
            setGlobalState({
              user: `qiankun-${(Math.random() * 100).toFixed(2)}`,
            });
          }}
        >
          changeState
        </div>
      </Header>
      <Layout>
        <Sider>
          <SideBar />
        </Sider>
        <Content>
          {GolbalState?.State === MicroAppLoadState.Error ? (
            <Result
              status="warning"
              title="微应用加载失败，请检查应用是否可运行."
            />
          ) : (
            <div className="mainapp-main">
              {/* 子应用 */}
              <main id="subapp-viewport"></main>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
