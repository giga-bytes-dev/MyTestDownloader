import { SortOrder } from "../../util/SortOrder";

export type DownloadTaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  videoUrl?: SortOrder;
  status?: SortOrder;
  progress?: SortOrder;
  result?: SortOrder;
};
