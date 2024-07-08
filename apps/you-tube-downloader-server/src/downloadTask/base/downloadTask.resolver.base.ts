/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DownloadTask } from "./DownloadTask";
import { DownloadTaskCountArgs } from "./DownloadTaskCountArgs";
import { DownloadTaskFindManyArgs } from "./DownloadTaskFindManyArgs";
import { DownloadTaskFindUniqueArgs } from "./DownloadTaskFindUniqueArgs";
import { CreateDownloadTaskArgs } from "./CreateDownloadTaskArgs";
import { UpdateDownloadTaskArgs } from "./UpdateDownloadTaskArgs";
import { DeleteDownloadTaskArgs } from "./DeleteDownloadTaskArgs";
import { DownloadTaskService } from "../downloadTask.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DownloadTask)
export class DownloadTaskResolverBase {
  constructor(
    protected readonly service: DownloadTaskService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DownloadTask",
    action: "read",
    possession: "any",
  })
  async _downloadTasksMeta(
    @graphql.Args() args: DownloadTaskCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DownloadTask])
  @nestAccessControl.UseRoles({
    resource: "DownloadTask",
    action: "read",
    possession: "any",
  })
  async downloadTasks(
    @graphql.Args() args: DownloadTaskFindManyArgs
  ): Promise<DownloadTask[]> {
    return this.service.downloadTasks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DownloadTask, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DownloadTask",
    action: "read",
    possession: "own",
  })
  async downloadTask(
    @graphql.Args() args: DownloadTaskFindUniqueArgs
  ): Promise<DownloadTask | null> {
    const result = await this.service.downloadTask(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DownloadTask)
  @nestAccessControl.UseRoles({
    resource: "DownloadTask",
    action: "create",
    possession: "any",
  })
  async createDownloadTask(
    @graphql.Args() args: CreateDownloadTaskArgs
  ): Promise<DownloadTask> {
    return await this.service.createDownloadTask({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DownloadTask)
  @nestAccessControl.UseRoles({
    resource: "DownloadTask",
    action: "update",
    possession: "any",
  })
  async updateDownloadTask(
    @graphql.Args() args: UpdateDownloadTaskArgs
  ): Promise<DownloadTask | null> {
    try {
      return await this.service.updateDownloadTask({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DownloadTask)
  @nestAccessControl.UseRoles({
    resource: "DownloadTask",
    action: "delete",
    possession: "any",
  })
  async deleteDownloadTask(
    @graphql.Args() args: DeleteDownloadTaskArgs
  ): Promise<DownloadTask | null> {
    try {
      return await this.service.deleteDownloadTask(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
