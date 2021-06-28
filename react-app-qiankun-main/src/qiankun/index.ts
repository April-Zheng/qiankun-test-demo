import {
  registerMicroApps,
  addErrorHandler,
  addGlobalUncaughtErrorHandler,
  setDefaultMountApp,
  runAfterFirstMounted,
  start,
} from "qiankun";
import NProgress from "nprogress";
import { setGlobalState } from "./actions";
import { getMicroApps } from "./fun";
import { MicroAppLoadState } from "./type";

const MicroAppLoadErrorHandler = (error: any) => {
  console.error(error);
  const { message: msg } = error;
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    console.error(`微应用加载失败，请检查应用是否可运行`);
    setGlobalState({ State: MicroAppLoadState.Error });
  }
};
const registerApps = () => {
  const apps = getMicroApps();
  registerMicroApps(apps, {
    beforeLoad: [
      (app) => {
        setGlobalState({
          State: MicroAppLoadState.Loading,
        });
        console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
        return new Promise((resolve) => resolve(""));
      },
    ],
    beforeMount: [
      (app) => {
        setGlobalState({
          State: MicroAppLoadState.Success,
        });
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
        return new Promise((resolve) => resolve(""));
      },
    ],
    afterMount: [
      (app) => {
        NProgress.done();
        console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
        return new Promise((resolve) => resolve(""));
      },
    ],
    afterUnmount: [
      (app) => {
        console.log(
          "[LifeCycle] after unmount %c%s",
          "color: green;",
          app.name
        );
        return new Promise((resolve) => resolve(""));
      },
    ],
  });

  addErrorHandler((error) => MicroAppLoadErrorHandler(error));
  addGlobalUncaughtErrorHandler((error) => MicroAppLoadErrorHandler(error));

  setDefaultMountApp(apps?.[0]?.name);

  start();

  runAfterFirstMounted(() => {
    console.log("[MainApp] first app mounted");
  });
};

export { registerApps };
