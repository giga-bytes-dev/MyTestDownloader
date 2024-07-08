import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DownloadTaskManagementService } from "./downloadtaskmanagement.service";
import { DownloadTaskInput } from "../downloadTaskManagement/DownloadTaskInput";

@swagger.ApiTags("downloadTaskManagements")
@common.Controller("downloadTaskManagements")
export class DownloadTaskManagementController {
  constructor(protected readonly service: DownloadTaskManagementService) {}

  @common.Post("/download-task")
  @swagger.ApiOkResponse({
    type: DownloadTaskInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateDownloadTask(
    @common.Body()
    body: string
  ): Promise<DownloadTaskInput> {
        return this.service.CreateDownloadTask(body);
      }

  @common.Delete("/download-task/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteDownloadTask(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeleteDownloadTask(body);
      }

  @common.Patch("/download-task/:id/progress")
  @swagger.ApiOkResponse({
    type: DownloadTaskInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateDownloadTaskProgress(
    @common.Body()
    body: string
  ): Promise<DownloadTaskInput> {
        return this.service.UpdateDownloadTaskProgress(body);
      }

  @common.Get("/download-task/:id/status")
  @swagger.ApiOkResponse({
    type: DownloadTaskInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ViewDownloadTaskStatus(
    @common.Body()
    body: string
  ): Promise<DownloadTaskInput> {
        return this.service.ViewDownloadTaskStatus(body);
      }
}
