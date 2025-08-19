// lib/api/fetchOperations.ts

import {
  staticOperationsData,
  OperationSection,
} from "@/lib/data/AreaOfOperation";

// This async function mimics fetching data from a database or CMS.
export async function getOperationSections(): Promise<OperationSection[]> {
  // In a real app, you might fetch from an API. For now, we just return the static data.
  return Promise.resolve(staticOperationsData);
}
