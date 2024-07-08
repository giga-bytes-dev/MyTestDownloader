import { Injectable } from "@nestjs/common";
import { DownloadTaskInput } from "../downloadTaskManagement/DownloadTaskInput";

@Injectable()
export class DownloadTaskManagementService {
  constructor() {}
  async CreateDownloadTask(args: DownloadTaskInput): Promise<DownloadTaskInput> {
    throw new Error("Not implemented");
  }
  async DeleteDownloadTask(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateDownloadTaskProgress(args: DownloadTaskInput): Promise<DownloadTaskInput> {
    throw new Error("Not implemented");
  }
  async ViewDownloadTaskStatus(args: string): Promise<DownloadTaskInput> {
    throw new Error("Not implemented");
  }
}
