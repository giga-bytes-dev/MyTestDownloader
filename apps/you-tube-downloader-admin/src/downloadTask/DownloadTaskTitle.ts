import { DownloadTask as TDownloadTask } from "../api/downloadTask/DownloadTask";

export const DOWNLOADTASK_TITLE_FIELD = "videoUrl";

export const DownloadTaskTitle = (record: TDownloadTask): string => {
  return record.videoUrl?.toString() || String(record.id);
};
