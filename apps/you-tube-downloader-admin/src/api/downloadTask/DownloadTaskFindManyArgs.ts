import { DownloadTaskWhereInput } from "./DownloadTaskWhereInput";
import { DownloadTaskOrderByInput } from "./DownloadTaskOrderByInput";

export type DownloadTaskFindManyArgs = {
  where?: DownloadTaskWhereInput;
  orderBy?: Array<DownloadTaskOrderByInput>;
  skip?: number;
  take?: number;
};
