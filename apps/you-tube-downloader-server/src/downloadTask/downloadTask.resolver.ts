import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DownloadTaskResolverBase } from "./base/downloadTask.resolver.base";
import { DownloadTask } from "./base/DownloadTask";
import { DownloadTaskService } from "./downloadTask.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DownloadTask)
export class DownloadTaskResolver extends DownloadTaskResolverBase {
  constructor(
    protected readonly service: DownloadTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
