// lib/api/fetchOperations.ts

import {
    BlogsDetailsItem, blogsDetailsData
  } from "@/lib/data/blogs-details/blogDetailsData";
  
  // This async function mimics fetching data from a database or CMS.
  export async function getBlogsDetails(): Promise<BlogsDetailsItem> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(blogsDetailsData);
  }
  