import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  endedAt?: SortOrder;
  id?: SortOrder;
  startedAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  uuid?: SortOrder;
};
