import React, { useEffect, useState } from "react";
import { Button, Layout, Result } from "antd";
import {
  getGolbalState,
  onGlobalStateChange,
  setGlobalState,
} from "./qiankun/actions";
import { MicroAppLoadState } from "./qiankun/type";
import SideBar from "./components/SideBar";
import "./App.css";
import { registerApps } from "./qiankun";

const { Header, Sider, Content } = Layout;

function App() {
  const [GolbalState, setGolbalState] = useState<any>(() => getGolbalState());

  onGlobalStateChange((val) => {
    setGolbalState(val);
  });

  useEffect(() => registerApps(), []);

  return (
    <Layout className="App">
      <Header>Header</Header>
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
              <Button
                onClick={() => {
                  setGlobalState({
                    user: `qiankun-${(Math.random() * 100).toFixed(2)}`,
                  });
                }}
              >
                changeState
              </Button>
              {/* 子应用 */}
              <main id="subapp-viewport"></main>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
