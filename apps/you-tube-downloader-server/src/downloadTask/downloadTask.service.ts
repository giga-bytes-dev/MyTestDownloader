import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DownloadTaskServiceBase } from "./base/downloadTask.service.base";

@Injectable()
export class DownloadTaskService extends DownloadTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
