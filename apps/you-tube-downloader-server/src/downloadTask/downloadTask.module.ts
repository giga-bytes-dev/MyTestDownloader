import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DownloadTaskModuleBase } from "./base/downloadTask.module.base";
import { DownloadTaskService } from "./downloadTask.service";
import { DownloadTaskController } from "./downloadTask.controller";
import { DownloadTaskResolver } from "./downloadTask.resolver";

@Module({
  imports: [DownloadTaskModuleBase, forwardRef(() => AuthModule)],
  controllers: [DownloadTaskController],
  providers: [DownloadTaskService, DownloadTaskResolver],
  exports: [DownloadTaskService],
})
export class DownloadTaskModule {}
