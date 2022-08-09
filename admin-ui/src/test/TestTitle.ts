import { Test as TTest } from "../api/test/Test";

export const TEST_TITLE_FIELD = "name";

export const TestTitle = (record: TTest): string => {
  return record.name || record.id;
};
