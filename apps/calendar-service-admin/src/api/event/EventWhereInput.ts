import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EventWhereInput = {
  endedAt?: DateTimeFilter;
  id?: StringFilter;
  startedAt?: DateTimeFilter;
  title?: StringNullableFilter;
  uuid?: StringNullableFilter;
};
