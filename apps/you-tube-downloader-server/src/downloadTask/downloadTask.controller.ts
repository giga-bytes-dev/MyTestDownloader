import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DownloadTaskService } from "./downloadTask.service";
import { DownloadTaskControllerBase } from "./base/downloadTask.controller.base";

@swagger.ApiTags("downloadTasks")
@common.Controller("downloadTasks")
export class DownloadTaskController extends DownloadTaskControllerBase {
  constructor(
    protected readonly service: DownloadTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
