import { initGlobalState } from "qiankun";
import { cloneDeep } from "lodash";
import { MicroAppLoadState } from "./type";

const initialState = {
  user: "qiankun",
  State: MicroAppLoadState.Loading,
};

let internalGlobalState = { ...initialState };

const { onGlobalStateChange, setGlobalState } =
  initGlobalState(internalGlobalState);

const getGolbalState = () => {
  const clone = cloneDeep(internalGlobalState);
  return Object.freeze(clone);
};

onGlobalStateChange((value: any, prev: any) => {
  internalGlobalState = cloneDeep(value);
  console.log("[onGlobalStateChange - master]:", value, prev);
});

export { onGlobalStateChange, setGlobalState, getGolbalState };
