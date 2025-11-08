// lib/api/fetchOperations.ts

import {
    BlogsListItem, blogsListData
  } from "@/lib/data/blogs-list/blogsListData";
  
  // This async function mimics fetching data from a database or CMS.
  export async function getBlogsList(): Promise<BlogsListItem[]> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(blogsListData);
  }
  