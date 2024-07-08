export type DownloadTask = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  videoUrl: string | null;
  status?: "Option1" | null;
  progress: number | null;
  result: string | null;
};
