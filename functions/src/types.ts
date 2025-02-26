// Interface for the visitor data structure
export interface VisitorData {
  [ip: string]: boolean;
}

export interface AppVisitors {
  [appId: string]: VisitorData;
}
