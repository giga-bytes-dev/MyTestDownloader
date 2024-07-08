import * as graphql from "@nestjs/graphql";
import { DownloadTaskInput } from "../downloadTaskManagement/DownloadTaskInput";
import { DownloadTaskManagementService } from "./downloadtaskmanagement.service";

export class DownloadTaskManagementResolver {
  constructor(protected readonly service: DownloadTaskManagementService) {}

  @graphql.Mutation(() => DownloadTaskInput)
  async CreateDownloadTask(
    @graphql.Args()
    args: DownloadTaskInput
  ): Promise<DownloadTaskInput> {
    return this.service.CreateDownloadTask(args);
  }

  @graphql.Mutation(() => String)
  async DeleteDownloadTask(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteDownloadTask(args);
  }

  @graphql.Mutation(() => DownloadTaskInput)
  async UpdateDownloadTaskProgress(
    @graphql.Args()
    args: DownloadTaskInput
  ): Promise<DownloadTaskInput> {
    return this.service.UpdateDownloadTaskProgress(args);
  }

  @graphql.Query(() => DownloadTaskInput)
  async ViewDownloadTaskStatus(
    @graphql.Args()
    args: string
  ): Promise<DownloadTaskInput> {
    return this.service.ViewDownloadTaskStatus(args);
  }
}
