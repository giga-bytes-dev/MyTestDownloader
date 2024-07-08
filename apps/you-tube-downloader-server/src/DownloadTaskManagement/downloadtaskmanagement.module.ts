import { Module } from "@nestjs/common";
import { DownloadTaskManagementService } from "./downloadtaskmanagement.service";
import { DownloadTaskManagementController } from "./downloadtaskmanagement.controller";
import { DownloadTaskManagementResolver } from "./downloadtaskmanagement.resolver";

@Module({
  controllers: [DownloadTaskManagementController],
  providers: [DownloadTaskManagementService, DownloadTaskManagementResolver],
  exports: [DownloadTaskManagementService],
})
export class DownloadTaskManagementModule {}
