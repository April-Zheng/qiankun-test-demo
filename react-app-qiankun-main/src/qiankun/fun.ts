import { IMicroApps } from "./type";
import { getGlobalState } from "./actions";

const MicroApps: IMicroApps[] = [
  { name: "reactapp", entry: "http://localhost:3001/" },
  {
    name: "vueapp",
    entry: "http://localhost:8080/",
  },
];
const getMicroApps = () => {
  return MicroApps.map((item) => {
    return {
      name: item.name,
      entry: item.entry,
      container: "#subapp-viewport",
      activeRule: item?.activeRule || item.name,
      props: {
        getGlobalState,
      },
    };
  });
};

export { getMicroApps };
