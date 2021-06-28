export interface IMicroApps {
  name: string;
  entry: string;
  activeRule?: string;
}

export enum MicroAppLoadState {
  Loading = "Loading",
  Success = "Success",
  Error = "Error",
}
