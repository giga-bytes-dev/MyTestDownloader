import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DownloadTaskWhereInput = {
  id?: StringFilter;
  videoUrl?: StringNullableFilter;
  status?: "Option1";
  progress?: FloatNullableFilter;
  result?: StringNullableFilter;
};
